<template>
  <div>
    <NuxtPage />
    <div>
      <noscript
        ><div>
          <img
            src="https://mc.yandex.ru/watch/86583955"
            style="position: absolute; left: -9999px"
            alt=""
          /></div
      ></noscript>
    </div>
  </div>
</template>

<script setup>
if (!process.server) {
  (async () => {
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(
      window,
      document,
      "script",
      "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js",
      "ym"
    );
    ym(86583955, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });

    window.reachGoal = (targetName) => {
      ym(86583955, "reachGoal", targetName);
    };
  })();
}
</script>
