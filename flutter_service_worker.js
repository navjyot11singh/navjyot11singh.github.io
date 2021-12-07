'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "2ff21744d06de6e2de93e6685f7774ef",
"/": "2ff21744d06de6e2de93e6685f7774ef",
"main.dart.js": "504b8e45e6de4d75f5214ee85e0dbd74",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "01c79825fd9250c7a7e10155bf982a4f",
".git/config": "16df721db0e0de6a853ab65eb552ac65",
".git/objects/95/cdc93f5a5bbf0584460c8d6e24baf90d78ba07": "f1860370aa3e48cff759ce43a294c072",
".git/objects/50/e4385de5aa029188552df6ce3aa48e54b6bb89": "493a544364fa8511eb6096567a7050cc",
".git/objects/50/8c4c26f3a80fb51b46485aba1b124ac1876541": "fbadb60567a5bc6865a429c1b2b548f2",
".git/objects/3b/9bfa2e636b4da9a03234694d8ed2cf5442d262": "0754f4e5d009e145b7f044528983003a",
".git/objects/3b/1d47081990e6f8fafc9547cb155646ac9bf1ef": "b853bed2cb11c5f053a6f6e8715cddcf",
".git/objects/3b/4f9f590e9c364d0d7fa894988aed5e5e4837a0": "8e4d4262fda453f07222657c553d5882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/91e58cac8c6c10cd09c72f348fd1f72d41252c": "c512c4d49efec01ab2662594e079ad60",
".git/objects/35/36583f1f3534ef74fd27d4e0ed9cc027fbf654": "5802e91234fdaef66d0c3b5101b2f6d3",
".git/objects/56/9106fb6db23b9cd10cba62a1ce2782be6dbbec": "4a6ef46e7f0c72f48f0217721ef66524",
".git/objects/0b/c548ae408480cf826ab6028360eff465027bc6": "34e54df572fb169420edbcf3d0a92a57",
".git/objects/0e/5e43a15583bde63df4833d78d50d324535b3ae": "83528c6e2ea7b6d955afa6541caa4f40",
".git/objects/60/3f6d29d222c05e35730da17453df045be9a994": "2c51cfcdc6bd232d815bb9692cc23b6d",
".git/objects/a3/d21544cd1206e86d4eab5db24d8f4e4e0b1255": "baed2d4172410e88c79abe932c4c88c4",
".git/objects/d7/79368601d447725199e9ab07c112c9d9cd5863": "0ff631f47b77805ae6056483ca27a459",
".git/objects/df/f1a79f47ef7c27b1eaf652a8a12e145f96b4e7": "24d5f6426da5f7a8b9c18a3530352479",
".git/objects/ae/f4c1d186e3ff0a78ebf4c5733d562d7c3a2e32": "44c6304cb835b81d0c6f12ff04eba655",
".git/objects/ae/127cce08b4564a327940f5b828e3f1770cfe0d": "a95076a242c8acb7da556855aa150ed7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/8ec6ae3e48674f6dd9caa3e5dbbd1955f54bed": "d9bc27ad9465e0f7bcb386c1276245db",
".git/objects/f4/c30388e893c392dbe671e1ffe4e9a7f8a1c306": "c12ec7e6fa78969487f48d67da4cf88b",
".git/objects/f3/c178d3a5bd03b40f69d0616dc020998c1a0bcf": "665fe87227ba0a90ca4473ff2476971e",
".git/objects/c7/0a7a8c6284a1b09c5633fe40cf8c125ef9d064": "764d2b3f9084aa9c0708feffcd80be8e",
".git/objects/ee/b4ad36c35175751d868e1b0bb06e63ef048b2b": "ff3ee4408677065357cda599484ec3ea",
".git/objects/fc/c9fadc021c2a7bff9d3cde59540c774b747673": "ef9f8ed7524e0e36381bcd418e2a8e92",
".git/objects/f5/ff1db467360af9c9ee5ab9cf00f77692916f3b": "92e8d859690a802f5d35efc71f71ed59",
".git/objects/cf/e208f7b2ecbfe019a703c07022f268914f4f68": "c2bb16840dab375e1231ceb7baa77d7d",
".git/objects/cf/5044752737c421fea5273083cd41744d0d7e10": "ccb7d1b37ab50e8bc76e4cd0094a24cd",
".git/objects/e4/efeb9262bb30684f0f9ef57b0c8926116aa4c1": "07829b8d352cb67d045f0595ad47f2ed",
".git/objects/c6/76dc4f7b9fbcc29eb952d92b3cecea6b6d5bd9": "0330a9fbab148c512457faa4ebae48ad",
".git/objects/ec/084325b2270ff92438647621a4ea70eedaf262": "8cef6a5e0025d8ff977185270b48be92",
".git/objects/ec/f07b41b0cf6f64dd0a5965e64e6c27fa1c97a4": "4d216a797c439d773557ff00e1194463",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/ac478d1cad402b6bd06a30b04d768d3d7a0c40": "ca1786456686abe78f4ba60d1200a7dd",
".git/objects/4b/6d7f7dfa19b4172558aa297545f33caf4d002c": "88f2ad6a36a25dc1d1a58804808bc8b9",
".git/objects/11/a8efef3c9c404f7e0769875ac201641815cc50": "f8fafba35710b4792b155f09d03eef9e",
".git/objects/16/b481f57dc02d251542bf4348f25b9aadf8d838": "7f9726d7b50cc0af708bf1a4f0cce6f4",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/80/37280719d5b82745361ca1249084ebec98ed24": "a0db4e2049d1517b63da152128f7c010",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/0ed2bfda6d05288d7149faafe2a592561f6421": "a89baca8bbc61407f8e5808e70c31890",
".git/objects/75/ed4952d3d2985fcca077792f86f7c7b4528be6": "3bf07277bb59d2c74f3ed9945b927c0f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/70ed447701ace2f43783fa8faa92f22e9a0efa": "faf8a6f58fcfcda19d6b4fa999c3ae25",
".git/objects/38/1c7d307c32b711430ec40fe3945ed7cc61b098": "dcaae1ca4d0391720253761d15df74db",
".git/objects/5c/5b76cb094ededa3caa21dda7adb19c677a772d": "15977d7b774c7c49d4d1dfd1953ea9d2",
".git/objects/96/8fc909157a7f2c74e1f5cf8d1236d128b8a0be": "631a66453edfb784ce2c79d9da5868dd",
".git/objects/54/a4f5849b5238f0b715deba8100149e858dd3a7": "fbeb075f8af5e97a125427bc0ef4c12d",
".git/objects/54/9d95b614e966d21d19e2f1345b9c7287580479": "999512221a8bdd7292d9bf59bfb08c1d",
".git/objects/3f/dc048b90e4d22cf1617a5eb35acdb940453666": "b5c6d5c420c455abf75d5eaff6eb4b32",
".git/objects/30/2366ddba2562cba659eca831398230b61b5539": "cc65a385539e13e85d579ad267584b41",
".git/objects/5e/da3bca41e82c8f6d61ed9acadb9f5b56d3066d": "813155e1f378f90cea00052d74bc6cc8",
".git/objects/6d/062682f942dea5b92ff96af8742d18be2b19a3": "a153a3e2e232c390ba06657fdac715ae",
".git/objects/63/b9e414a0bc85106d6b5490847276a579f49d01": "9338b648e6e14963c3a4c40efad05b62",
".git/objects/0a/7a7a6c3dfd7fa2a77646f553ab4c0075cb5f07": "811ec662ffb3c5f582196eec2be2ba69",
".git/objects/d4/fa7e4903ba19c908b40f4ed350d8d5bd686d84": "01197954d9644a8128a83cc002e1b40f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e9/78e8e8fc347c257022690e7146de6296d8d77b": "7c3d5550a0365376226086869de41c6e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/23/e733823c7e58180b397874392ec90e22fcb642": "a60314c13da82675ae616f9f31d131d4",
".git/objects/8d/42671a2ea60c1e9dfaafe463b3a4d094505083": "a4ea8fbd33c18994873c8827a53d1652",
".git/objects/71/d974e9f36ae98d07421cc86afcef8a10131104": "c4f9ccd9db1625715e4d92d828715147",
".git/objects/76/ab61b4f66aa6f3ef2310ff116e5bd32e348a31": "e5b834e2562bd358c1f2cff4323491ed",
".git/objects/76/6d715bdca6154a2092513c3d6efd3c08c6fc46": "f4019bbecdb8e5ece0797b4d6c9c665d",
".git/objects/40/f35211c803352408149169cdea5f705e5d5b6f": "093e4e2c5bc01d8668b59eeb03354c82",
".git/objects/7f/82a9d995b0247386bbf8dd80f313ccd71ff9da": "ff34aca8191e0e00716410bef34c59a1",
".git/objects/7a/d1afb74532859eb4ab4f13ef06708fe255ce4e": "f230add91f920569cde289994db486d0",
".git/objects/25/ebf119ad9d5279f3bf97cda8974b1d4fccef93": "5415f476634eed8ebbc3f38ecf3bcb98",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7725fb5450aaf474b40bc5dad90c40a1",
".git/logs/refs/heads/master": "7725fb5450aaf474b40bc5dad90c40a1",
".git/logs/refs/remotes/origin/master": "dd3d77231e938170670bd80eccd40cca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "81f1ed34b52705a2cc28c7953877014b",
".git/refs/remotes/origin/master": "81f1ed34b52705a2cc28c7953877014b",
".git/index": "16f43a8e31c448f61cf7e16aad2eea22",
".git/COMMIT_EDITMSG": "f4b3e80b575d86e8185f4bf6e44bd557",
"assets/images/icon.jpg": "1d6c1f55328298f9c4b58426b3b7767e",
"assets/images/projects/topfood.png": "2e85bf80bf3965f6b85fb19fe1c6d3af",
"assets/images/projects/omran.png": "ca5fe45e4998ba2cd53c795537419014",
"assets/images/projects/nataloe.png": "f2e32e0341fcde78352c4fb7fd364d7b",
"assets/images/projects/toptaxi.png": "25fc761abc220c62a31a61a41542872f",
"assets/images/projects/juda.png": "47dd713dafca0915de28fee247372661",
"assets/images/img.png": "be16828daf1a93d5a827889c5d7c1963",
"assets/images/mainImage.jpg": "d39ca30d5594bbf2e3b3a33529866b3a",
"assets/images/ouahid.png": "91c27922538d60bdc20f2aa7ad1b7c86",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "1378f724a4ef3df21343069d822ae0d3",
"assets/FontManifest.json": "56a6be909b7a2d8103740792f4ede9ff",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/github.png": "dda4ed64a67ac5d80e8eac27dfbe677e",
"assets/icons/smartphone.png": "cf3a60e7c9f7fac4e483dc966f0503fd",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/twitter.png": "a7816572c352bfe51269b54acc194aa8",
"assets/icons/linkedin.png": "db258b08e73a8f7bd99442aa0901c794",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/facebook.png": "24de0499bfe09d83eb302a3958c37a5b",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
