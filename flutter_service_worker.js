'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "acf9b5b4cd8a43918b3009265d20885f",
".git/config": "7a3677b6e2d16da2b4de4481a01f26d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "02f7c346e7c0569b5a5d97a52eea783b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56f87971958ecf7227e98eba02be70c0",
".git/logs/refs/heads/master": "56f87971958ecf7227e98eba02be70c0",
".git/logs/refs/remotes/origin/HEAD": "70215d7d171417246bc8ebe8c65001b9",
".git/logs/refs/remotes/origin/master": "94f1c9e3ff76e39e6957218eb110e1de",
".git/objects/0a/16f699c7cd751f76c70ea7f275981cef32ef2f": "d620fbe540654e65623009e13b9861b3",
".git/objects/0a/5958a5d10b172c1fd58275863a23dc33cd5c29": "8ea5ed4ace1d1288c1759f04623e4f29",
".git/objects/29/99be6b0223f4e8046fa8e6703767a5389ac130": "0fce3164b0c6f63836f272b5b9aaedcd",
".git/objects/34/13f87133c72ae70ad9d44c3e9efec9e1e32187": "ca54b89fdc45b28ce301a2a7aa7d570e",
".git/objects/38/00983f4bdf7111968eae2b840dc1efa101b755": "6b8a10bddf367fd881a4d62e4d51849a",
".git/objects/38/eab61de49b597a9e80c07986037ede5ed3c2e9": "de0e9f43a503ea2aa4b30f8ad2fc97de",
".git/objects/3c/65e0b5ef63ffd3d94852c3d315fe5fa1c608a6": "a944bfd8765542edadecb56b38b1c329",
".git/objects/54/7bfe5a75e3b20e967f8586ccd5b5d4ace6563e": "fd4d7902360afac3162d84e33d4688cb",
".git/objects/68/287d7a490cf1779dbbec396aebd5d642fa7600": "d142e9a2094b7749e015228745d1ade3",
".git/objects/6a/fe1c0bd106d153dfb5519bb2fdeeacadf345ec": "5e3a4a64ba87d1d369f6b9f1eeb58611",
".git/objects/71/ef0c5dff321006212fad86c153139afd93b1e8": "6e2770daca7b8bae14e62761c0704258",
".git/objects/8c/9158d55f6ed191680b3ad8a30e6a9a4b758dba": "ce02711d827c808a5d86d8fffd32b3ba",
".git/objects/90/0d3121bb70de9313a3a2b31511411605094f88": "099012766b429409e18caf07eeaa7f45",
".git/objects/d5/a636633bf0f2a18d77f2b960c95b99a0add179": "9970bb800c5e1690fad7f0835ed865ef",
".git/objects/f9/9bc3859bdab6f50d113740691185ba6fd35a4b": "f682d6ee80a89f7ecf085a0cbf7cfd0b",
".git/objects/pack/pack-0fc33e5031302c840af6af56306c46ab05188d15.idx": "9c0b218f0e8542ec34c62a342540b46e",
".git/objects/pack/pack-0fc33e5031302c840af6af56306c46ab05188d15.pack": "a47f21ca6b1a023f18cf2c8309acafa4",
".git/packed-refs": "02c5837265665f903f774487f2e97395",
".git/refs/heads/master": "8229b8e4d04e8e077193a2e4842e8ad6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8229b8e4d04e8e077193a2e4842e8ad6",
"assets/AssetManifest.bin": "0bf0f1215405faf7480f1a52c8c5cdcb",
"assets/AssetManifest.bin.json": "b345f89b2573f5cf6bcf0ac29fa38811",
"assets/AssetManifest.json": "aa15c13797e551134649740baa7ad915",
"assets/assets/bg.png": "ddf88f5c76aeaf5fad310a215e354c56",
"assets/assets/Tvs_logo.png": "823e6226461c6eb9a3a2aa8f55e1caec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "c95a1b48eb0818c5cc4638386c3dbfa0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "575ca59b0cb30ceb9c34235876d45edb",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "575ca59b0cb30ceb9c34235876d45edb",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9a5958c51ce4b22955e4abcdf58ce48",
"/": "8aa566f1092a9a6aad1fb53e712603e2",
"index2.html": "88f953c8e98067cb2d75661762fb292a",
"main.dart.js": "674869822877c207d3661929f79f3741",
"manifest.json": "4652912550f87d0460182691598210c5",
"redirect/index.html": "8aa566f1092a9a6aad1fb53e712603e2",
"version.json": "3ccfb5658b21c6f5f435dfd63e54527b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
