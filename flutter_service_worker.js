'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "959876b1b28824b4f0bbc758fbf2f3e7",
"index.html": "2f0090eff1ff4e1edc64859d02d0452a",
"/": "2f0090eff1ff4e1edc64859d02d0452a",
"main.dart.js": "1584973bbd0c62eb0f30c635ca5cfd21",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "775257ec570dea1f3c9fb01877f009d1",
".git/config": "9e524a0162a346d000060569400aa5ba",
".git/objects/0d/381897da20345fa63112f19042561f44ee3aa0": "3bf13dd934008af16ac66bd120ec07f3",
".git/objects/95/0c1ea9f9ddc5fcde04b1202395894cac5f62ff": "d033cc8a990784b3d0d291eef2816007",
".git/objects/3e/25459a60fd4c1956692abf762da91e83c8b1d9": "29a888eb732c71cdbf6aa3573d6dd7e5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/30cbd81333fd9fb88502f57ffbcafaa42240cf": "658f0b129245d3fdfcf22eee69df7ac7",
".git/objects/33/c88ee51a7b7bbd81ad21caa49d2860e5cc95f6": "028ffd40c8fca74221162229f8a5e2cc",
".git/objects/33/edec84343f33bb903117eb0da0a6cd012b880d": "a8aacfc2e8b45244205c6fcc87c7cbab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/bf044c77a56399a85fe7c306ef056821ce6cf0": "5e14ca7a287ea4823ec1fe3330c0b89f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/79d43bea0293ac1b20e8aca1142627983d2c07": "45f4c1433af804021b790f7f90e08e1a",
".git/objects/f2/2fda89b4f51226a6077e2babd4097ac9123be5": "13422c346c80039645bca51acbb7f30d",
".git/objects/c1/c52b3eb1cb86f252ab0f88617e4adaf7dff0f9": "0fb0093c4180f16bfa48c6a8d978e959",
".git/objects/18/98b180a4ca51d82215264167eb7108db6f17ac": "4507e10b486eadf780f8e69e00de36a5",
".git/objects/87/0c1b3100926af17abf4f56038b9befdaa7d455": "907df4a3a28e1d7a50159bfa7142baef",
".git/objects/1a/7679e3949fb045f152f456bc4adad31e8b9f55": "ec3a5401331dacd6fa133e7e58035ad5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/f6f84a0799946fc4ae02c52b27e61c3762c745": "14810974580b9993931ba5e21046b943",
".git/objects/2f/946299140c8c63dc2e9adb557912a9ad4fb006": "38a1a57a9919e71ec1d9d1ea64a0f9b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/49eeffe48d2191d5f78537ec8f434895096c77": "ffd9cfd8b1dc6e2bc76055ffb7d5741b",
".git/objects/54/24983ba92a07cebbe3261b5705fcd2221dae9f": "c25bb21d2b229febc48379d10c6059cc",
".git/objects/d3/0e45f93454a0f73c7834589fd7a2b48c1f6347": "ad3372a1a24c2669e18329536d3a69a0",
".git/objects/a9/aabb4a1d6ed3ee346cae31bb3c53a347d47464": "b79886c5fb494f82b46fdf019c904e97",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/433349b7047f72f40072630c1bc110620bf09e": "9361f2ddd0544e138d58e5ddcb235916",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/f05bbe5bdf1cf79c50aadeb9af054cdff5d77e": "5562a1e3a7cbf333d277fc293ce46884",
".git/objects/2c/cff037904cce2d5ca41eaec0534027a20aaba6": "0118a0b9712a367e85d2e8168885f26f",
".git/objects/79/1f35577883e30921311398652c22a57a6dbec8": "ff27dc7f2b647f10adcf9d2fd0b7ac9b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/14/af45967925c58a6153bb18b02ca5d1bb7e4d6b": "fe5ba977d4a4b5bd80c6b91d5c286cd9",
".git/objects/22/0bb2bf0ab73630beb3c1d3136cc17f05e80820": "1e266d572272444a2476042ccd233987",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74edaaadcba2391e6720c77c66ced008",
".git/logs/refs/heads/master": "74edaaadcba2391e6720c77c66ced008",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "9e5660a1f88f21d67caf2f1c5e99d358",
".git/index": "6305702904402a8bde7a16f3320ee09a",
".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
"assets/AssetManifest.json": "50631807326e0af37eca34ad1cb166c8",
"assets/NOTICES": "6b80d10b4fdfffbd60ca6fa3ee50f38f",
"assets/FontManifest.json": "743523f74871f2dc2345cd9cc51bf7ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/fonts/DM-Serif-Display/DMSerifDisplay-Italic.ttf": "d2af11895465e37774867e31515e5db5",
"assets/assets/fonts/DM-Serif-Display/DMSerifDisplay-Regular.ttf": "c74abbf26c8502846ddb018c7a3659ef",
"assets/assets/fonts/neonderthaw_regular.ttf": "4782e3813306cbb976aa3fbc5e00174b",
"assets/assets/fonts/Open-Sans/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/fonts/Open-Sans/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/Open-Sans/OpenSans-ExtraBold.ttf": "8bac22ed4fd7c8a30536be18e2984f84",
"assets/assets/fonts/Open-Sans/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/Open-Sans/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
