'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "3c18a590919d51e7c5d00121e0a9351f",
"/": "3c18a590919d51e7c5d00121e0a9351f",
"main.dart.js": "9357a56b2f3fbd3541cb608dbfd827c7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "01c79825fd9250c7a7e10155bf982a4f",
".git/ORIG_HEAD": "6452a42040603620ef975a5e3c4bad30",
".git/config": "4a49356745e321833d6441ca89f8d7f2",
".git/objects/61/5ed5f87c11981d881e9884094d2fbf4038b4fe": "47fb29c61dcc5c1e6fd8425b6be2d462",
".git/objects/95/1f773825d96171497cbb9112ea9c903b0b56b8": "bbcd70920ec681c795390bb4c22cf91c",
".git/objects/95/cdc93f5a5bbf0584460c8d6e24baf90d78ba07": "f1860370aa3e48cff759ce43a294c072",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/e0fb971e14b1cd39b3d10accf330f8437409d5": "77580485a2ffb0230fae5ffba3a0ac13",
".git/objects/3b/0ac050addbf95656f7d0c8fd24714a3d286d03": "833d31754ed5ca7b7a231c2fd743fddd",
".git/objects/67/9c5c79de79774d882d4f4c456e44b048e45497": "bc1f596bb629c6556191cc6659e4fc60",
".git/objects/0b/26aefb6e1aeb45d091f99c93be976600eab3d7": "ef12dbac45ee118f04d7bcd39085c47c",
".git/objects/0e/b180edacff998d03b1694c887b2a169386eceb": "4afb33da2d678681e1cf86d9348f89dc",
".git/objects/60/3f6d29d222c05e35730da17453df045be9a994": "2c51cfcdc6bd232d815bb9692cc23b6d",
".git/objects/60/f67603eebd93388598787e99c332ae8e3cc759": "5b06d259951a3b3df7d855722efc9abb",
".git/objects/02/e3dcfe85b703ba2ead98765054b2798273a24c": "b02c090b202162b77cee62d038164d0e",
".git/objects/bb/ee535692b9018c43c2de03c41a45e52ab3d79f": "ed8c053fa58d067e610ede70ad679964",
".git/objects/d7/79368601d447725199e9ab07c112c9d9cd5863": "0ff631f47b77805ae6056483ca27a459",
".git/objects/d7/f360f23aa7f0d9dff1cc63c08561f354ada7ac": "16d6d650850161775baa1ddb24741485",
".git/objects/d0/1e099871fc07e643ebb80c76dada5062fd066f": "dae4bb98ec96a746ac5891d3d5790ce8",
".git/objects/bd/c200bcb9485309e38f0519e2b80d4588007ac4": "acf9d7a822f710421bd602f37c106dba",
".git/objects/ae/89b920794399a36403682b93235f5803e7e887": "4c405a4ac7653b490a4341dd9bdc97e8",
".git/objects/ae/127cce08b4564a327940f5b828e3f1770cfe0d": "a95076a242c8acb7da556855aa150ed7",
".git/objects/ab/f3d068cff1fb8f6b72e35d4b416dbf6d08c122": "fa73428e169c189d3209cd09222c2fc9",
".git/objects/e5/b4e1ae6b334c3db68d44cfbd131315eb3fb881": "4f1295ce3ce0137406f7ad33b2766fc3",
".git/objects/f4/c30388e893c392dbe671e1ffe4e9a7f8a1c306": "c12ec7e6fa78969487f48d67da4cf88b",
".git/objects/f2/c1f0cf328aa2369b1816a098acd8cf5c15d69a": "6e557885fea8b009562eb7d1a6ca7401",
".git/objects/ed/68a87e4c17d3de66c0184bbbd6c988710644b4": "810107bee7947729fd6960b5e4c3e40c",
".git/objects/ed/b1d91d1d0b24b1d304ae94449de011187fc35e": "5cfc4572711d82d5bd2bd83dfe854b1f",
".git/objects/ec/084325b2270ff92438647621a4ea70eedaf262": "8cef6a5e0025d8ff977185270b48be92",
".git/objects/20/65ab7db0d50d1bedb59b995b5dd20aede22498": "1ab78ed84b6cce118e411194e57e104a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/73fd020f1413808101034dbe6b7e5c8fb5cd97": "b34882cc7aafb3495b06cd7f8e20dc14",
".git/objects/18/22a3aa7bd93a77b2379e0061b55d77964cf78e": "37853702d00ee52b74d8942859ceb6f7",
".git/objects/4b/6d7f7dfa19b4172558aa297545f33caf4d002c": "88f2ad6a36a25dc1d1a58804808bc8b9",
".git/objects/pack/pack-51fa4f887cdc752468ed43316ec67cae37354930.pack": "05e6ef56b84672471e6e6eb4093c5dad",
".git/objects/pack/pack-51fa4f887cdc752468ed43316ec67cae37354930.idx": "fc1c87c5861eb81515d994ce9a8dec9e",
".git/objects/11/31e494a043f04d4a69f5970fbbbba5d38cb93a": "5f0580ff6a48edc91f2685a277b1228a",
".git/objects/11/a8efef3c9c404f7e0769875ac201641815cc50": "f8fafba35710b4792b155f09d03eef9e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/d6080c784e6443694ff0c3618f33ee0c6555ca": "41a3e19df60eb4523cc28ce08fc8ac50",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/89/e584100ebc32eea65598d8fc7db03217dc85eb": "41f72acb976bdf4efef4ff6e82fee24e",
".git/objects/80/37280719d5b82745361ca1249084ebec98ed24": "a0db4e2049d1517b63da152128f7c010",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/7d200ed9167b9e5bbb8ce1e583caf6eb69344f": "a77d0300dfabe56fefb394e98a2a5465",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/fc3fc31b387aca13bcd5fdc4fb9e37fd3f8917": "9a1a8d7ec5a8c478c48c93345329bc23",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/26/1f93bf37d0c41742042f55b59d508d779632b5": "2a37e7d4918f1a73be7f505fd5a5dc2c",
".git/objects/21/eab1e9a0031ceb96512b5ac373c17ab7724a73": "1d0c64519df03239aba43c0b21e12c47",
".git/objects/86/664383e2cfd9f4c34d4199132036155cd21696": "23d27ab8496a82b8c16a4cc8f360c028",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/1c7d307c32b711430ec40fe3945ed7cc61b098": "dcaae1ca4d0391720253761d15df74db",
".git/objects/5c/5b76cb094ededa3caa21dda7adb19c677a772d": "15977d7b774c7c49d4d1dfd1953ea9d2",
".git/objects/09/156f88345d2bd3f75c4f14eff481be7898afd7": "25b7aae26fdf7d5b7db8b8f6f36b4e21",
".git/objects/31/dd98e89d336f0ba5f23ed7edfa602003d518ba": "bf7d9e17e7895f6d795da2d224d0747b",
".git/objects/96/51f0437addab80c528c095fa26e41b38f1a312": "5e88268054229e02dc10d9bf15b75328",
".git/objects/96/8fc909157a7f2c74e1f5cf8d1236d128b8a0be": "631a66453edfb784ce2c79d9da5868dd",
".git/objects/3a/cf6aaa80678537ecdb130d0a1d9890b1a9ba5e": "9a1a7675100478a90a9ac2509f6eb30f",
".git/objects/3f/dc048b90e4d22cf1617a5eb35acdb940453666": "b5c6d5c420c455abf75d5eaff6eb4b32",
".git/objects/3f/d71658a90093f1436f6213e5cdea4922ade60d": "4551b4ecf8776ac13d8ca422105d3ca0",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/e32d6d6b9414ccbb48d9e013554dec672bdda1": "d1f85f0fb651518374d5e655ac4909ce",
".git/objects/30/095c94e834e2696379abf1f6bb82cc26e92e97": "71ef06146d11cc6db66c2166ac868f90",
".git/objects/97/f7c5adae3fda206ce598e14bb702b39b686774": "c992ee4c0d130a08fee745ffb547f51a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/b9e414a0bc85106d6b5490847276a579f49d01": "9338b648e6e14963c3a4c40efad05b62",
".git/objects/0a/7a7a6c3dfd7fa2a77646f553ab4c0075cb5f07": "811ec662ffb3c5f582196eec2be2ba69",
".git/objects/90/b4f0e13d6d19a0c09b55671fa3055d657eb1bc": "81ca3f761945891cbb48ee78fb9f6ee4",
".git/objects/d4/fa7e4903ba19c908b40f4ed350d8d5bd686d84": "01197954d9644a8128a83cc002e1b40f",
".git/objects/ba/ee48b8784a9ae1a3ddf69752274fe495709d28": "388121ab9a8f55a790c4bf227ccc3167",
".git/objects/a0/bbf882f008b573ff81b88b6edee06b2e430636": "8197673c3921b2e9d4993ce1af6621ac",
".git/objects/b8/52acf3047fd2135ad7188bf3f493907a1d1671": "c3e2eae6f8e142701b03a916d6d228d1",
".git/objects/b1/19ec87dc8a09d922c5e2146f500f2e20648be0": "e12e39c2c7fc3677781345df35859de9",
".git/objects/b7/8d8c9ae7fb49cc9800cd3f61befe2493a7782e": "6926af70bc494db7f53613c6fa536310",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/7a6fb88be02f44820d394159755eb820999de1": "e2ad4bda36b3c62fc9e2e78825d007a1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/76c7349173e2a9f5bc2722f50f3a7b70da9072": "b2cc68430c409eb4a4406b1837c98686",
".git/objects/ef/8892e5ece5a106ccda0cf260309d45e4869603": "753d91433237bca2b1154a90a37457b1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/ada7be9869ebf841bc42eae65f27402e79dfd5": "2c73c7ad297a62b39675d8ccda1b182e",
".git/objects/f0/7fdf9c3cc2c3215ecfd35e628592039f5f707c": "9b6e2e8a9d318250f0f56b50653d9549",
".git/objects/f7/93c213c74cc0417a0a6cb57bc16e92a9af6133": "1ab8d667debc990849a946b79ff52812",
".git/objects/ff/0fcdc976613e5b1d75974a43f1dae68d5de001": "f6ff23afe586a2770d07660c8317436b",
".git/objects/cb/8f27bb655e30fe9ec8af31cff8b6ea2e4e4404": "33baad10672daf6ee4d6c6927569d831",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/77/cab4057d61309f628e29793076eaf831c9832f": "b50527f235fb7cdf9d79cf2814665571",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/23/e733823c7e58180b397874392ec90e22fcb642": "a60314c13da82675ae616f9f31d131d4",
".git/objects/1c/09769bbc7b722eca3b8824bc12d3d56a0a0dde": "cb9ce084d60bddb66d7592aa1433ee1b",
".git/objects/40/e6c97b2786fbb22ca58edc71c9497ea75ecb77": "3bb505e47ab5d506c046de12d3c5fed7",
".git/objects/40/f35211c803352408149169cdea5f705e5d5b6f": "093e4e2c5bc01d8668b59eeb03354c82",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7f/82a9d995b0247386bbf8dd80f313ccd71ff9da": "ff34aca8191e0e00716410bef34c59a1",
".git/objects/22/50bb1bf5cd7cf273e5b6754df5dc28d3501eeb": "86c9b91fe3973880babebacf33c9b5cd",
".git/objects/25/ebf119ad9d5279f3bf97cda8974b1d4fccef93": "5415f476634eed8ebbc3f38ecf3bcb98",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b17e5fe7677f467da12814dfcac49839",
".git/logs/refs/heads/main": "b17e5fe7677f467da12814dfcac49839",
".git/logs/refs/remotes/origin/master": "f9daf2c90a004604089cf5d4a4c5671a",
".git/logs/refs/remotes/origin/main": "1f24e95871f2433497138b602f4e6bf8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "116b7366c842f657dd9ba759be6bdf88",
".git/refs/remotes/origin/master": "1989e105af90657f79c660f0a28acbaa",
".git/refs/remotes/origin/main": "116b7366c842f657dd9ba759be6bdf88",
".git/index": "395298792836e5b69854a8bae45570fc",
".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/FETCH_HEAD": "817a9f035b761560de362118ed517030",
"assets/images/icon.jpg": "1d6c1f55328298f9c4b58426b3b7767e",
"assets/images/projects/credflow.png": "e753b528d6f26710247468ec948f3af4",
"assets/images/projects/credflow1.png": "597b4c794faa04f745d35a8180955faa",
"assets/images/projects/removingBarier.png": "96db31c2fa530789ce3c1dc833f720da",
"assets/images/projects/moolwms.png": "392aa708d77f1a157c0674b15bd6be03",
"assets/images/projects/hspot.png": "3e5d3a941a92536fdc6f409c00bb4487",
"assets/images/projects/eduboon.png": "60ddd2f3554bb935406af429b1618779",
"assets/images/img.png": "be16828daf1a93d5a827889c5d7c1963",
"assets/images/mainImage.png": "d270a72ffc0f692d859f44bb498fcaab",
"assets/images/ouahid.png": "bb8f37c49d21c2fbaa970ea56c8b66b6",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "5285a32de8f72d52c2dae9f761a48ee1",
"assets/FontManifest.json": "56a6be909b7a2d8103740792f4ede9ff",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/link.png": "fa52eba8ee1098c8607fd521b7f01ac8",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/sql.png": "a3ce3b283d4d57b4e4fd79f86c4c1556",
"assets/icons/github.png": "dda4ed64a67ac5d80e8eac27dfbe677e",
"assets/icons/java.png": "123205f672b1b564fd434716a8359856",
"assets/icons/smartphone.png": "cf3a60e7c9f7fac4e483dc966f0503fd",
"assets/icons/http.png": "50cfd298ceab9fb20053a96102cb3d72",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/twitter.png": "a7816572c352bfe51269b54acc194aa8",
"assets/icons/linkedin.png": "db258b08e73a8f7bd99442aa0901c794",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/loadbalancer.png": "c56a479cd6d418f60126e78c61ec9e73",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/api.png": "c806165ca9c0ff765bfafdcc6970520d",
"assets/icons/facebook.png": "24de0499bfe09d83eb302a3958c37a5b",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "720413d6441ed8b9553e85f239dc96e2",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
