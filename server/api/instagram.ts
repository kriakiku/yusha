//https://www.instagram.com/yusha.otter/?__a=1

const REFETCH_TIMER = 1000 * 60 * 60 * 24

const cache = {
    data: [],
    updatedAt: 0
}

export default async () => {
    const now = Date.now();

    /** Give cached data */
    if (cache.updatedAt + REFETCH_TIMER >= now) {
        return cache.data
    }

    try {
        const rawData = await fetch('https://www.instagram.com/yusha.otter/?__a=1').then(response => response.text())

        console.log(rawData)

        cache.updatedAt = now
    } catch (e) {
        console.error('Failed to upload posts from Instagram:', e)
        return cache.data
    }


}

