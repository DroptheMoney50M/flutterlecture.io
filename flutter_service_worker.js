'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "17d7cb7309609456929e1649998afd9d",
".git/config": "068f630e9fca6e5f9fb281b827764cbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bcae88ff8d5fc6e000ee033a85c692f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "117c0f68885924a6431439287d79029c",
".git/logs/refs/heads/main": "f5a21b9db51c2c91b177fad73c82ce73",
".git/logs/refs/remotes/origin/main": "2d62e4c47d9007f976d051f7fc451076",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/d26d50994794e4a5db71bbaa250213e80abad8": "623f3d5c0e14bf7ce7f25976b9554237",
".git/objects/0e/fb320b049f42a9f67a4ca3a22a7f7406afe3e8": "505e36aa76a9f217bd9148c6b8fe30f4",
".git/objects/16/32b8975f7fcc1356b2520bd5245a18d9a14baf": "53b5828f809356487552dce3c8f25f6f",
".git/objects/18/9af8f7e6aa7a85e57f63d5f8af2085f72b6318": "e1acd1da4e133ea9b18c5cb39bd45a5d",
".git/objects/1b/5239f43c3cc50327b8774aa78b113b4936653d": "79b96d4b73f6e65a2418f5407ce0d417",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/29568ba36626971cf0a6667693ea06ed70e5d0": "e438b1c03f7bb0fca8517f033e8ec2df",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/7d50fa9512482b8137e0dd6c13ffda2eeac8a9": "b287170334798fc4dc10efcc37a04752",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/1c01b0a015ed8156d237a287efba6d49922104": "135618535c2ece96eb0c12d7d5600edc",
".git/objects/49/e5ca8cf663d628f367a86603c5ca56fc40044b": "1ae78c422b92e6b338bc575dd50f5dfa",
".git/objects/51/d832528e3cad2da376c5fe844a1935fdf4ef23": "0981325da9881323ebbec1d4199efe6d",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/d20a1c434fa86523184c95564f5e35f76f8386": "33dc7f69b954888d7086b0b484daa9d0",
".git/objects/63/06661ae6c3c09ab447e6db63814082a959601d": "7a7a90b08b3b6210cd54bb068564efeb",
".git/objects/68/c4bd5ea5c38ba95318eb40d13e9b52399bbe38": "41a45184033f4da2f499a3e645b7805b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/4a733adb0673cbf8044a08d5318afddd3439eb": "0b063271db6acb14eaabc49e708adb8b",
".git/objects/6d/d6af81808cbcd61c007382bd55aff08435bf46": "997e0d6d25ee4bd97d673af436dfe068",
".git/objects/84/899ab1a7ac2772be3a1f7ddd8495b20101f4ca": "0b7c50b7fdfdb30c92875caa77c9c297",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/97/2e2c07fa67239c99e968fb33a6a6f6dbf8bd12": "dfe19c25e64b54d6e19dbbfe69557549",
".git/objects/9c/5cf2004cee328b0ef80f4206911dede8c3389d": "8eff73885ccce9c1ca206c39378a4c49",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/a183b245a52bd06dac80fe48c89711a01dd7e5": "8642ef04c1ebc30d287cdef5d21293bf",
".git/objects/b4/96ba534af35767b3ba6117337a835e7a55f719": "23b104c5a5fdc01e3cc5c304bf622af1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/382ead8fdc3a4102f465b83600bcdab277f260": "23d1326eb1a12e2e8bf2e579332d7d6e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/7653c33a390fba8f612844705daae20f56a4df": "f55a6fdfefd901b30251488d5bd0ee04",
".git/objects/c7/bd72878b59beb8628c1a0e16db04c6ada95f2b": "36a8a013c47877c6ff5bed9f3cd3f8a7",
".git/objects/d0/f35edf9f7171b2092047ec21b30d6b46353ef3": "f89dad057e8b48ba2af04aeda52621fd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/df/a09ff02c059658347532fa3fbfeec0b8ff9563": "294518de91f888b9599d7d6520ab1d6e",
".git/objects/e2/a4a3be8015bce73eabeeb8cbf67c045f087f53": "502d49d2c729ac43d8ee775730a8be03",
".git/objects/e7/310ac30f6d736739650ac5f5b04f009faa017e": "3dd73003c4b841cbc63be5426dc07b03",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/11188708ab1b47334ef9788d1d335046a9f4be": "e55892945610c9031954b7ed123f547a",
".git/refs/heads/main": "d1ef4f94a8e355b32e3c0d7e2c2ec196",
".git/refs/remotes/origin/main": "d1ef4f94a8e355b32e3c0d7e2c2ec196",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "0139f3a06dfd7266a6decbef32c72455",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/canvaskit.js.symbols": "25b66ed57bca264b764d81e0836d06ff",
"canvaskit/canvaskit.wasm": "0e8df9401cf439e22db32d8c8af2dc5f",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.js.symbols": "56485348c9a6b86ace4d456b93cbed4c",
"canvaskit/chromium/canvaskit.wasm": "367a3f990f96fb2f2891bb75cd49c1ff",
"canvaskit/skwasm.js": "c757bee7edc67bf93024e6df40a7e31e",
"canvaskit/skwasm.js.symbols": "45ab593149bd9a9f2642e220260a2153",
"canvaskit/skwasm.wasm": "5406751ddfda2935adadf99c7ab0fcb4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "3d2d3f0ce1f4787fc09f5aadd286551f",
"canvaskit/skwasm_st.wasm": "da25fa0877408d3bf62c136efe281740",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bb1c4bdf453efa9ce789fbba0840f2f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d41e4489871ab462f480a55b1a973e9",
"/": "6d41e4489871ab462f480a55b1a973e9",
"main.dart.js": "62a33e625c28699519ee75a10fbe5af7",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "b3b87f9153d4406c14bc11865bbe1089"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
