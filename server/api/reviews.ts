import stc from 'string-to-color'
import { decode } from 'html-entities'
import { getFirstnameGender } from 'lvovich'

const REFETCH_TIMER = 1000 * 60 * 60 * 24 // 24 hrs

const cache = {
    data: [],
    updatedAt: 0
}

export default async () => {
    const now = Date.now()

    /** Give cached data */
    if (cache.updatedAt + REFETCH_TIMER >= now) {
        return cache.data
    }

    try {
        const reviews = await fetch(
            'https://n363845.yclients.com/api/v1/comments/346950?staff_id=1310559&count=100000',
            { headers: { authorization: 'Bearer yusw3yeu6hrr4r9j3gw6' } }
        )
            .then(response => response.json())
            // Only high rating
            .then(reviews => reviews.filter(review => review.rating >= 4))
            // The text is no shorter than 200 characters and less than 400
            // .then(reviews => reviews.filter(review => review.text.length >= 200 && review.text.length <= 400))
            // Uniq users
            .then(reviews => reviews.filter((leftReview, leftIndex) => leftIndex === reviews.findIndex(rightReview => rightReview.user_id === leftReview.user_id)))
            // Detect gender
            .then(reviews => reviews.map(review => ({ ...review, gender: getFirstnameGender(review.user_name) })))
            // Ignore androgynous names(((
            .then(reviews => reviews.filter(review => ['male', 'female'].includes(review.gender)))
            // Only required data
            .then(reviews => reviews.map(review => ({
                id: review.id,
                author: decode(review.user_name),
                avatar: `https://avatars.dicebear.com/api/${review.gender}/${review.user_id}.svg`,
                color: stc(`${review.user_name}@${review.user_id}`),
                text: decode(review.text),
                rating: '⭐️'.repeat(review.rating),
                date: new Date(`${review.date} UTC+3`)
            })))

        cache.updatedAt = now
        cache.data = reviews
    } catch (e) {
        console.error('Failed to fetch reviews from yclients:', e)
    }

    return cache.data
}

