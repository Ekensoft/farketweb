'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "51e338759e0232a7c174bbd2cabb3133",
".git/config": "f4480eb2c3065a2f30be60ffb24d049c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ff5b03a8b668ada13c699536d6e3630d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "4db791044391b1eca73e243dd24edce9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2fcc7f6a6994d774954a421173a97feb",
".git/logs/refs/heads/master": "2fcc7f6a6994d774954a421173a97feb",
".git/logs/refs/remotes/origin/master": "ccf2315f3c028badb689f42a1b6e4347",
".git/objects/00/3dc9b60e46f9474e8fa2e49043fa6da91dbbcc": "fcb5001fed34b59876dfa48b52c15392",
".git/objects/06/0fdd0a4fc8ceedcb3ed5afb600bb527882ab7e": "5b7e1f483b4c3f21687125b7c99a4a31",
".git/objects/17/60675804958de4cd0292c646929daa4482fe7f": "67bef2821c2ac3bec1b720cf9e568bb1",
".git/objects/1f/22959965bfe100b2f4c8404084e9fb05a24c16": "1b4838ff386c0d51a74c7794e4bdb45c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/e2116e1e7e6e00cb3889a1e71ae619325d013b": "70ebc314f237147d3e49630c100d1e8f",
".git/objects/42/b170cc6b94624a7886a9157544646522de0f07": "edb0b230feaef5a88e3fb5bdb31ae509",
".git/objects/50/94f0a2f2d45fa9b66182dc29607efc400f6fdc": "08f23a182155db518f4f257f68383f9e",
".git/objects/54/00b9690dc590cad43836b6918a326da61b2bc5": "8108f342a4b1198b2dd13ace118465f2",
".git/objects/55/f7b4c8effd68d54682dd031b947488b9db5cc1": "89b0d8f9b87fc414f3c1aacd018a7987",
".git/objects/5f/341afba6a2a2a7a4c10a1aa542ca92e2dc3d45": "a4584cd25c8ba7b94c8f06b4b7112d7b",
".git/objects/6b/be833d5656965d418aaa2fc8d2742d75ede048": "a6d2db8864892f671b45291674dc6e62",
".git/objects/7b/f252281b66bc36c1496b77421f896a17f63504": "423b4dcd0dd1d950880b6450d0a04034",
".git/objects/7d/79b9d423a951b4d317967c8204553e2777859b": "a8faa5f1cf82cb25dcd91bb3b42a8847",
".git/objects/88/3584d91298fdf3756c681d6c6c900f1ef5cd6b": "99cfb55e786ff51ad87e19119d3ec8b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/8fd13be00b8e643d79681ea3a883433e56316b": "02c45d0cba9e85e897fb6ef73b84577c",
".git/objects/97/f1b7afae57fce452b4f0d59f5679a20354dd3b": "8aca9eabd14002d28c6859dfc4b1e26d",
".git/objects/9a/3c74a97e7e0beca66ff326feb939390c8b6d76": "cbe99ce547c18a9873656ec370bc1f9b",
".git/objects/9d/db993be8fe32f78786a11324579b67be8658e3": "66e4c168075ea1d63519023e4cfc8bf1",
".git/objects/a2/0a9f8c6951667ba42c124c276465980e84b6fb": "2654132f7dc7b886ab565759cc05a40c",
".git/objects/a4/418fe849eea6f089b80f0bd3b08f5b1422a511": "4bb8bcc949d5ead2071c70b196cbc384",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/4ff0b8810ac054f9744b1e4424ced11c34ed02": "d1228301d19ca1d5ea5d76074f3ab1d1",
".git/objects/c7/a992c709efdf702b01051f37d245d1fa0683ad": "beaccb64092432320ea8cc570b317f9e",
".git/objects/ca/461057b293dabcb33e95f39feefc980064160f": "cd62390526c2997a29cedde16e1b7e96",
".git/objects/cf/bd81e6bbdf0c01fa72e7e56788fac2569848ce": "d9426dbaa896a27f60ec4813478fd618",
".git/objects/da/375783583cfe3296bffc5063ce0840c7425cf8": "d0d2fd353b8378b82b7b206d1cc42760",
".git/ORIG_HEAD": "b4a9e4cd66cd92bf793e4649577340f0",
".git/refs/heads/master": "e77394540b6ff119528f28988a19cb34",
".git/refs/remotes/origin/master": "e77394540b6ff119528f28988a19cb34",
".git2/objects/00/48e5a2a": "fcb5001fed34b59876dfa48b52c15392",
".git2/objects/06/0fdd0a4fc8ceedcb3ed5afb600bb527882ab7e": "5b7e1f483b4c3f21687125b7c99a4a31",
".git2/objects/17/60675804958de4cd0292c646929daa4482fe7f": "67bef2821c2ac3bec1b720cf9e568bb1",
".git2/objects/1f/22959965bfe100b2f4c8404084e9fb05a24c16": "1b4838ff386c0d51a74c7794e4bdb45c",
".git2/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git2/objects/32/e2116e1e7e6e00cb3889a1e71ae619325d013b": "70ebc314f237147d3e49630c100d1e8f",
".git2/objects/42/b170cc6b94624a7886a9157544646522de0f07": "edb0b230feaef5a88e3fb5bdb31ae509",
".git2/objects/50/94f0a2f2d45fa9b66182dc29607efc400f6fdc": "08f23a182155db518f4f257f68383f9e",
".git2/objects/54/00b9690dc590cad43836b6918a326da61b2bc5": "8108f342a4b1198b2dd13ace118465f2",
".git2/objects/55/f7b4c8effd68d54682dd031b947488b9db5cc1": "89b0d8f9b87fc414f3c1aacd018a7987",
".git2/objects/5f/341afba6a2a2a7a4c10a1aa542ca92e2dc3d45": "a4584cd25c8ba7b94c8f06b4b7112d7b",
".git2/objects/6b/be833d5656965d418aaa2fc8d2742d75ede048": "a6d2db8864892f671b45291674dc6e62",
".git2/objects/7b/f252281b66bc36c1496b77421f896a17f63504": "423b4dcd0dd1d950880b6450d0a04034",
".git2/objects/7d/79b9d423a951b4d317967c8204553e2777859b": "a8faa5f1cf82cb25dcd91bb3b42a8847",
".git2/objects/88/3584d91298fdf3756c681d6c6c900f1ef5cd6b": "99cfb55e786ff51ad87e19119d3ec8b9",
".git2/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git2/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git2/objects/8e/8fd13be00b8e643d79681ea3a883433e56316b": "02c45d0cba9e85e897fb6ef73b84577c",
".git2/objects/97/f1b7afae57fce452b4f0d59f5679a20354dd3b": "8aca9eabd14002d28c6859dfc4b1e26d",
".git2/objects/9a/3c74a97e7e0beca66ff326feb939390c8b6d76": "cbe99ce547c18a9873656ec370bc1f9b",
".git2/objects/9d/db993be8fe32f78786a11324579b67be8658e3": "66e4c168075ea1d63519023e4cfc8bf1",
".git2/objects/a2/0a9f8c6951667ba42c124c276465980e84b6fb": "2654132f7dc7b886ab565759cc05a40c",
".git2/objects/a4/418fe849eea6f089b80f0bd3b08f5b1422a511": "4bb8bcc949d5ead2071c70b196cbc384",
".git2/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git2/objects/bc/4ff0b8810ac054f9744b1e4424ced11c34ed02": "d1228301d19ca1d5ea5d76074f3ab1d1",
".git2/objects/c7/a992c709efdf702b01051f37d245d1fa0683ad": "beaccb64092432320ea8cc570b317f9e",
".git2/objects/ca/461057b293dabcb33e95f39feefc980064160f": "cd62390526c2997a29cedde16e1b7e96",
".git2/objects/cf/bd81e6bbdf0c01fa72e7e56788fac2569848ce": "d9426dbaa896a27f60ec4813478fd618",
".git2/objects/da/375783583cfe3296bffc5063ce0840c7425cf8": "d0d2fd353b8378b82b7b206d1cc42760",
".git2/ORIG_HEAD": "b4a9e4cd66cd92bf793e4649577340f0",
".git2/refs/heads/master": "e77394540b6ff119528f28988a19cb34",
".git2/refs/remotes/origin/master": "e77394540b6ff119528f28988a19cb34",
"assets/AssetManifest.json": "cb70f393e7547e4ee5f7954ff10a7fa9",
"assets/assets/logo.png": "b125a98250b737525f1f5108396c20bf",
"assets/assets/market/a101.png": "373f1b916627d89204cdab53a71737be",
"assets/assets/market/asfora.png": "5c847fb667e6b6585d7add0144df0030",
"assets/assets/market/bim.png": "6c2547bcd1714c6451192f5b771f52d3",
"assets/assets/market/celikkayalar.png": "915716fa0917226f17781507beacdb35",
"assets/assets/market/mismar.png": "757981b880a14aa5a9065bab79fb8a13",
"assets/assets/market/sok.png": "5ba8bbafa6e983659f7356d1d5e73e32",
"assets/assets/urun/filizcay.jpg": "81c1b36d06ac255ffea0f02bc07f199f",
"assets/assets/urun/pinarsut500.jpg": "830244b96576db2ff1385424d6f22c37",
"assets/assets/urun/rizeturistcay.jpg": "f31dd12ef979eac27de0a3f9240fae4a",
"assets/assets/urun/tahinhelva.jpg": "f8040f971014b5a3ea963ae1686a8fd6",
"assets/assets/urun/tozseker.jpg": "9cfb6830797c5359518eab574919a196",
"assets/assets/urun/zeytin.jpg": "a7934c79aaa9a266eaaac9e4fd156bab",
"assets/FontManifest.json": "0ffe48844f40a158befd90900e132e92",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/logo.png": "b125a98250b737525f1f5108396c20bf",
"assets/market/a101.png": "373f1b916627d89204cdab53a71737be",
"assets/market/asfora.png": "5c847fb667e6b6585d7add0144df0030",
"assets/market/bim.png": "6c2547bcd1714c6451192f5b771f52d3",
"assets/market/celikkayalar.png": "915716fa0917226f17781507beacdb35",
"assets/market/mismar.png": "757981b880a14aa5a9065bab79fb8a13",
"assets/market/sok.png": "5ba8bbafa6e983659f7356d1d5e73e32",
"assets/NOTICES": "0532916d9aec0f41e5a804aacca92f98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/urun/filizcay.jpg": "81c1b36d06ac255ffea0f02bc07f199f",
"assets/urun/pinarsut500.jpg": "830244b96576db2ff1385424d6f22c37",
"assets/urun/rizeturistcay.jpg": "f31dd12ef979eac27de0a3f9240fae4a",
"assets/urun/tahinhelva.jpg": "f8040f971014b5a3ea963ae1686a8fd6",
"assets/urun/tozseker.jpg": "9cfb6830797c5359518eab574919a196",
"assets/urun/zeytin.jpg": "a7934c79aaa9a266eaaac9e4fd156bab",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f622f066326a2375f8d2ee03b8b105c1",
"/": "f622f066326a2375f8d2ee03b8b105c1",
"main.dart.js": "33cf8ad29161e2ae7bf804dc119efc9a",
"manifest.json": "4ddf497f5758a93514ff653345c782c3",
"version.json": "f18c66be6ab779193bc15cfa1a9d0266"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
