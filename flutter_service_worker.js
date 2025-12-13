'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0b176c05ba5a8e411ce4a2eb369ba3ff",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "13cfc461c1d5a212b6edf3e80a712990",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "12ca9e6ac89fc52933fbd7f313957261",
".git/objects/61/5a1d87d51f2a25e73a54dc0c4c229791bf4dbc": "76c507799ec7a0c82de22beaa936f846",
".git/objects/61/fb89fac172fefaa5a9efa0058797007ba6efb7": "7cdb9e915a26e672b63cfcd86b9640aa",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/d99771c12eca617feca7a79810a1e0e4e39b5a": "62131174a2dfc59152b518a79b66ed27",
".git/objects/0b/5fecd732bb652cd43898c748255c3730456f34": "294b21cb64cc68453e60a440633a46ff",
".git/objects/93/100488008df00c97903822739771348b7ce837": "7033d497664ed9cf9ca442a1309f085d",
".git/objects/93/e6a3229563e9e010d6b537b82547f5782d7dd0": "64cd821ca6ccb9b9c4ea5c5eeab67bcb",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/34/2ab3a4e04c285dced6fed7537da692b2f95382": "aba26d07df261960d0c69cd6e1c3a15f",
".git/objects/33/74ae1ebc029e99bdc188156783fa9e47df2b0d": "92f3937589883b5dce20981453167e20",
".git/objects/02/fbe5fb7b4c7194c0951b21b682f88d7313fcb7": "cd7bffc58ffe9363410c0debaa7cb776",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/3b5e81241711188981594e754996ec62656cad": "e55cf68c2a146a9ddb721a489b4df80f",
".git/objects/bb/d8ebac0a8a13c96c095d6c023134dcab69766f": "3203f6d55cbabba6dfa0ce516f65516b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/6cb064a9d0f77437379d549158060d6e7e0f16": "faafc96715b96811aff2e17ef98ae686",
".git/objects/be/b04ce6fc466976c437edb9137d4bcc9b6352e8": "89e4d1b9a063a61cf0144daa94921156",
".git/objects/df/307bc7f0642e61c514092c02e87e8e8bb19b3d": "2f1c54b2045603513054a95a32e09718",
".git/objects/b4/cb7c4d6062afb5b8f3804e484ff8af0002b3d5": "6e3670bc67e4d4ac91326df030d7babb",
".git/objects/a2/c6725569787ce109b660edf6fa9df08a5c79c3": "43967ed8e460db851e92cad5450e5e1c",
".git/objects/a2/df4542e1cb58a43125bf88477b8e98852e6db9": "2f50660d090e5446c69e1b9b99b3601e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/2e4959b3ca7da1038edf79646fa3e4da5db141": "ce8fb531e669cb2ab5a7b7d6e2783921",
".git/objects/f4/5e1d92818bca0dc5e3fdab211ed8ea2541b55e": "5871b47702d651a71f55b8e34498d668",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/6e4c52f61a667fa09cebad757f45844bf14104": "d5305cb7cf6dd6f40052b0c5c2108800",
".git/objects/c7/259f3b8aeecb506e98c98d19b33b89e4b93563": "e3bc596a4da13130fa0ced69a0ce7897",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/9bfb6fe57343e0edd2acd6bfd3b47a9211330d": "35eb57204e9627f91d4acf7880ea0d4c",
".git/objects/f5/c4cef89da7dc808396be2702dbfee5421e8bc7": "98fa3a3d0f7f4b7160ef9dfc136af688",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/384d22c2349520c6a7b6d86f396cda9e2ff093": "746716a74914ba066e3d6373a1e69c37",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/acaf6f7f80591de253b070918f6b4990a0e80d": "08c4d0c307257db7c45c95e17621042c",
".git/objects/fb/7f57167a1680330eb62d9f5362f391b3b2020b": "b47369cc398f1f8dde99d7442ca24cb6",
".git/objects/c1/13156d6fe84da45a23e9b2a599c68a98af050c": "bf7d6152247648dd7dc7880d3207f46d",
".git/objects/11/44bebc73f62abbf5c85a82766af0a605096370": "8355866bdc65ac71238a686c656ff3aa",
".git/objects/29/ca2bf53eff7e503e9a06266b0682a41bad9da6": "aa6d68110718b2824d86c1821c088fc6",
".git/objects/29/af754b8470de26ccc2313f9dd339138e7de6e6": "005f1bb0b8c53a412ae1f6b5e24e481e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/1f4ec8f4ce2e4e0c5dd6ab7874d1fdfa70e0ef": "6d3a4ad7398cf1bae30ff7f587287a1a",
".git/objects/16/c121aeadf98c8235531950c7803df58215fe3a": "d6311b2ff41586c0ceb45ee7ff3f49e9",
".git/objects/16/98a3c86174ff24b72bb69f445f361982d9ebd3": "8bc68231d7eb9bb718b40e04b609207c",
".git/objects/1f/cb5e7bb31c052334049e76c691f7caf5eb9732": "8088acd85b7943210f14a063f6028847",
".git/objects/80/dd64d2cf51d82513541155b5ac0fa28e19c9c6": "d56d0b803e8937b2dbba634091503557",
".git/objects/74/6b0ec4f9fe5fe6c42a5d0416b17dcaa81fae1f": "728ac91fea1bbe301e4d4d6cfe7fecaf",
".git/objects/7b/987cc57bcb54071d476654b5ba177774ac2d46": "426c5c0363e45a344ae6c6bf2073c6f0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/123e860d4dfde4eba5d8b7673b947ce4cb509f": "927ee6048355d1cf339b8dbf3b82cc80",
".git/objects/72/8fc87f720a26dd42bdeeaab1ea868ffbcb63bd": "de5c1a2e1a43e78ca564c8c8e177192f",
".git/objects/2a/cc371fb1e8f9451d843bfffc795691aa758460": "da4cb580699371ba929b3118abfd2bae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/a404042ca2db546cca031143952847389ec130": "e08d09fec06a75812522e23b268c9f55",
".git/objects/5c/96645c65234f845550dde7b4b2e9c182f5d4c0": "083c8e3879dc3b79eeaf6eb33af8d630",
".git/objects/65/8d54a3e543d642035f2790e5573df7928c8b85": "1105f314ca009fa2f4148a13401187b0",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/54/dc407713b837c9912d2b5e61e609a27688b37e": "6f31b7c3e7014e2e2dbefb10019f6b60",
".git/objects/30/7c0a2624687f6587fa705255376ec7a7945680": "362aa38ffdcea6f3d0622a0f8dd5ab07",
".git/objects/5e/c12fbcb06fada3073c6305fe082705393c102a": "aaa502f668740d9e803a87b927dd0de4",
".git/objects/08/8e53731dc690003143315e0877d515577d3986": "9c0f09941e670cd243974e5f038b1738",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/06/1894bbb969c5d4faf78b28b3b7e12aef3d79bd": "fdfac3bbe52fdd3937a6461bde448d12",
".git/objects/06/028f0e5596d64a97993334746f7c35b3d4bfb2": "2e0f70bc7d0020e57e153a0fc6dc5542",
".git/objects/39/cf0c7c537f07d591e75dac0c6600dca57ef1bd": "39000766b1a5197345908d606bbd0ce4",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f39a5138d72ab9630fec6737d7864419e11ed4": "ef195ad8b43e67b9799b69185683302f",
".git/objects/ba/69d2b037455c1c06d8e468a90af006537da47f": "c95c04d358485c0d2e43b47ef9e338f8",
".git/objects/a0/f384c4a4b95ac7b603d5c69427d7085bb31040": "81f75ece8beb1b5a4b8a5688d5b220ba",
".git/objects/b6/66e6dce03bc31fbd8f48f37d950905453824ec": "db0f68eed5b1144ce648f7cea867ed45",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/1b8cdea67bbd896449e7af9ca0324da675e797": "deb0e044c4a982ed744b8f2310b6d524",
".git/objects/a6/3fed882c0d18aab0b81250369fc8457ef1474f": "4074af3e95c2d5905de4861e46a086ac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/3c6b44566bd64bac6fe393c20b6057fdb0fe5d": "796f20414a6b4ddd36554ccdcb0f97a5",
".git/objects/ea/c06d1616ca0c2afb91dfd144e049d608f24f46": "e96be24885efb71715a2f27f01d090b9",
".git/objects/ea/a10e1b7852035b8f29777db9fddb59e9e8e34a": "d65f3ae3a031f47ef9d238c6992e0709",
".git/objects/e1/7fbe4aef192c134b55f875a14148f2a84206b1": "849ec775c8702a1b07d804a6fa6878d9",
".git/objects/cc/7646a97b599f37e45f78a32f29eafcd9514051": "c14a4d85a53ca49775dc175c78e39869",
".git/objects/cc/2b8ee15e0b7cdcd3b024b86f57c5ef2dbfeb36": "55e7b503d0827bc2208e9bc37e6580f0",
".git/objects/e6/a59266f078820a151a07f1ec29f66c8133749e": "76d243ab2d44287c38fe4d9775e43b26",
".git/objects/e6/6554adafabd979a8b8e4169bd3c6b9b30a7b39": "d9e50bf9f0959acc1ee2c9c0e227e942",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/9fd9b7e1d4a653b20d7e2cc022497b4111829b": "eeb39762ac6d426afb4fe2e20f37c22a",
".git/objects/e9/425542ad371ebaac563e2dd06aea2fb530ccef": "ef8736d147e6846c570fbadef5a9889c",
".git/objects/ce/6cb2d1b736996cd31ded4b76eb7bfbeea7aa90": "1abc1ee5346eb4a35107e4e1090e1f57",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/1bd962782c0e48b5741a3bbb16fa9c093e1825": "b53be3e80fffd9b34829dc2ec67e6287",
".git/objects/1b/49d92fc7c37991b203bcb64fffa1197be9c73f": "a824eeb81605dc7049563ec3ff22d57d",
".git/objects/77/d2582bb1e8a5a70e75897b94c278a67ad8761f": "38f0c0161585b2c3a3635aff7e3a8b07",
".git/objects/70/9cd614ae6225b058d80bf21e5f9b1b0b2a52a0": "001c9a6eb36ce42d0677bfd485b86f50",
".git/objects/84/a0b7eba4b64e22d76a9c13b609368b77ece504": "8783d0c85293a76eb5dacdb38a52459b",
".git/objects/84/b864cfda45f282b5a454d58b1f7d0dfb1ee746": "3f15f06e64419ae5adc08e8448076ccf",
".git/objects/4a/eeb3b47e14cf51966d622a047eb1be1fc865d4": "5473e3b4bceccf44cf7cf217efb64467",
".git/objects/4a/e478f5e6c83a7406d9edec3a3d12d7991e2bda": "366e7f9456c408805906c08d50e58aa5",
".git/objects/24/5edb1c9acd9b98d536da7c91c8f12f6d7da7f8": "4af896d100f54c492b46ec9d49a98a8c",
".git/objects/4f/cdb33bdbd26b20d5f939e0a36b250feb8119fa": "d84e854cbc5319c78fcd8c4440a28531",
".git/objects/4f/9add638fbd27249ac6de37b3d24830d3e839f2": "a7837b6308f99e47ea75b70587f06d07",
".git/objects/15/c448c48453bb895a08c643966829c6e8678314": "244692fafedaf73af2daf3eb371bc520",
".git/objects/15/d4f3d81b891fd4a296fe5d6f50525458df6e8d": "242ff9c781ae380560bcad79da382bcc",
".git/objects/85/0b0eea6e1c01c6e2e5585cb844431216f1c058": "c4546c16ab3d538356bc6000655dbf76",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1c/dcf62f29c4ddd56378d8663f02887fd8eef031": "11aaab380e422a21aee7e73affd02beb",
".git/objects/40/31d997f1b4e191b0a9283ec5a4adcbeb332684": "258766af2fa10e280ea15e613eb05be6",
".git/objects/47/ec7309503378ea68f1c339ed21e2cf45a4d2f9": "8a24f82d13c31f0241a9939901c40f9a",
".git/objects/14/1cdbe35b7d0906c342a19bd4ea401f57a3b7d4": "26282d497e591f2bcd0afebad39bafa8",
".git/objects/14/49b031b0986ceb7624f4790dafe7c8be20aeff": "49230c77a6c96ee1917a92dc092d3d8a",
".git/objects/8e/b0360d10201633ef76bba088641d0d1cdf4bbf": "f351846c06f5cad847c55cb9b501f705",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73c8b5f5fe511d463f465496c0cbd45e",
".git/logs/refs/heads/main": "d5149f8be5d824d4986b2028745b1b52",
".git/logs/refs/remotes/origin/main": "3a4958c1e644f7b3e87af9ad3c1c68a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "d27ffca07bd6243439089902a17e18d3",
".git/refs/remotes/origin/main": "d27ffca07bd6243439089902a17e18d3",
".git/index": "3623954fd97f191c08c69e92fa2c6742",
".git/COMMIT_EDITMSG": "f174f89f8c32cf338e9657b2af562f55",
"assets/images/me.jpg": "415adc42e930ede7b6ff8c82a4a7f654",
"assets/images/certf.png": "f7755d973129688224a8e54c6ea97069",
"assets/images/badminton.png": "83f18ec92a145dae0db1114441f69ec4",
"assets/images/deep-learning.png": "12cffb85206b7c7f6764b5f582ecd082",
"assets/images/logo.png": "fd2220dbb5a9c400d06b771a0a6b01ed",
"assets/images/my_pic.jpeg": "96f0311e3ab4ab5d057d3ac2e610a61c",
"assets/images/chat.png": "07153a899d6445e147cabfb0ae8ee834",
"assets/NOTICES": "b101c135245079470fcbdd5df4bc8cdd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5d6e89bab52884212fe4d2d5c2b6ee83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "69e424194fe28ce6d97366751aa53a1d",
"assets/fonts/MaterialIcons-Regular.otf": "8da859dbf53f1fbc53c52f5327788675",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
