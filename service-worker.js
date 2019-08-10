/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2471f62fbab5af58fa7fab470efe2de7"
  },
  {
    "url": "assets/css/0.styles.70080a2f.css",
    "revision": "3cab35ddcb0d1217ae25e893c5068349"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2e1c6ea2.js",
    "revision": "7092beaeab69b859ce8adee70797e2e5"
  },
  {
    "url": "assets/js/11.0b3452c4.js",
    "revision": "6ef206c1fc2771a6cb2cb505b5ce546f"
  },
  {
    "url": "assets/js/12.e6521f18.js",
    "revision": "3957caf4c63b9317fdaef615117994bd"
  },
  {
    "url": "assets/js/13.ec6b60f7.js",
    "revision": "3b5920dba947387c1ce2a1fee5a9d065"
  },
  {
    "url": "assets/js/14.32cb23e2.js",
    "revision": "f2fef02d28b3a1062eadcb8d9b2b50ca"
  },
  {
    "url": "assets/js/15.6592ef4d.js",
    "revision": "31838c12cdee5d196ae0de1f5fc48138"
  },
  {
    "url": "assets/js/16.2ebd7ba5.js",
    "revision": "a5d2c2ea79d671923d06545ebd85053c"
  },
  {
    "url": "assets/js/17.d3002f85.js",
    "revision": "c84d3c2999fddfcde3c9ca2ff42ea0e1"
  },
  {
    "url": "assets/js/18.1ca2e31c.js",
    "revision": "f06d8a67eca44670c1272b52b3198fd9"
  },
  {
    "url": "assets/js/19.299896ac.js",
    "revision": "73427cdfa26b584a23724d4102abd9ef"
  },
  {
    "url": "assets/js/2.70d45490.js",
    "revision": "009ceecaec78a1b05b07a510403df3db"
  },
  {
    "url": "assets/js/20.a0a708de.js",
    "revision": "b708848e675b37ce27f1ce67a1530c98"
  },
  {
    "url": "assets/js/21.c1741d70.js",
    "revision": "476a24ce61c40e1f99bb36ef54f8dbd5"
  },
  {
    "url": "assets/js/22.2b64f5a8.js",
    "revision": "9d925eedfb51dd17d0b7f6f7cf14f592"
  },
  {
    "url": "assets/js/23.1da63f9a.js",
    "revision": "4568dac40e7683c9a184608305558c52"
  },
  {
    "url": "assets/js/24.6a94e2a3.js",
    "revision": "d3049f3ce4780d2b9255d6ecaf833b0f"
  },
  {
    "url": "assets/js/25.11f1374f.js",
    "revision": "12533737a8f4bcc6ecf9f7a3daab78cf"
  },
  {
    "url": "assets/js/26.64f9bec6.js",
    "revision": "70d68f3e584bbedc7f33967a5311a81b"
  },
  {
    "url": "assets/js/27.9361c437.js",
    "revision": "5796ddd5721f7c53d9729abd6a1ceac1"
  },
  {
    "url": "assets/js/28.92601ee4.js",
    "revision": "5116d0fa454e4780bda41acdcd53e668"
  },
  {
    "url": "assets/js/29.27f7ab7d.js",
    "revision": "20df25a7710bbd8c6f332c34f5c6aa88"
  },
  {
    "url": "assets/js/3.b305efa7.js",
    "revision": "cb0c1c8bfc7aa3ca24fb054895ad2f36"
  },
  {
    "url": "assets/js/30.7e911a48.js",
    "revision": "c70249d2bb4d9dcb44c34819692c1143"
  },
  {
    "url": "assets/js/31.8af405fd.js",
    "revision": "be706db7a444442c430fd553b0e3fe47"
  },
  {
    "url": "assets/js/32.3f0828ad.js",
    "revision": "2a79262a9f9041cfb7703838cbf4683f"
  },
  {
    "url": "assets/js/33.e7363480.js",
    "revision": "0f86f7808a09320e21e365b2f2d2f58c"
  },
  {
    "url": "assets/js/34.e534aecd.js",
    "revision": "5399aa49f5283241cb680d6a2f04a386"
  },
  {
    "url": "assets/js/35.9d069bcd.js",
    "revision": "c1e4072ae593b71173abb34708031f25"
  },
  {
    "url": "assets/js/36.7dee7bcb.js",
    "revision": "b9e658bab3c066204cb188c413bf7041"
  },
  {
    "url": "assets/js/37.a120aa59.js",
    "revision": "70a146e1db57905a817ebf0092e48c91"
  },
  {
    "url": "assets/js/38.352b6dda.js",
    "revision": "e1f2c5364fbc1c48b4d5a9b69c16a19b"
  },
  {
    "url": "assets/js/39.435644d8.js",
    "revision": "c56c54a87a6c178dc87d821d755d8c5c"
  },
  {
    "url": "assets/js/4.abe8cbb5.js",
    "revision": "fcb7a2fe52de861bd2ffa2cb9068ee9a"
  },
  {
    "url": "assets/js/40.4979ac6a.js",
    "revision": "1c4e8ff6e408151ae1add6ea04f19823"
  },
  {
    "url": "assets/js/41.cc0228db.js",
    "revision": "9e7fce6e3b6f7317ef91c27011c4956c"
  },
  {
    "url": "assets/js/42.89bf50da.js",
    "revision": "df77d9bbe91bce32ea2348d86fb99c6f"
  },
  {
    "url": "assets/js/5.c8e2e656.js",
    "revision": "8d098cd29de2f8a99f17f8a7ba1e41b2"
  },
  {
    "url": "assets/js/6.b8cfc64f.js",
    "revision": "1de5aafb97b2b1a7b98e52bb275dd756"
  },
  {
    "url": "assets/js/7.2d390b37.js",
    "revision": "e1ccf19783fc9274e0e3f86fcc8a4099"
  },
  {
    "url": "assets/js/8.78619e6d.js",
    "revision": "16e9a911f5f73fa128fb9c493638e9fe"
  },
  {
    "url": "assets/js/9.b69b495e.js",
    "revision": "c6411711bd98b2bb2822162c00c04744"
  },
  {
    "url": "assets/js/app.5e6af511.js",
    "revision": "a3eb5687dab61d7e831443fa9b3567f9"
  },
  {
    "url": "huoqu/index.html",
    "revision": "4b65d7d4bb8b01f24373784e76436fcc"
  },
  {
    "url": "img/logo.png",
    "revision": "b2a5137d2f9abee5bbce6cb5f099129a"
  },
  {
    "url": "img/pwc/danei1.png",
    "revision": "09ce6e9793f8a7680dbde4b9e4f07d15"
  },
  {
    "url": "img/pwc/danei2.png",
    "revision": "e4cada95883548a46822b242e66446dc"
  },
  {
    "url": "img/pwc/danei3.png",
    "revision": "ffc655228119e1638bc76c1ce577afa2"
  },
  {
    "url": "img/pwc/danei4.png",
    "revision": "7f5a0e4bbb1974071cb4604208e162fe"
  },
  {
    "url": "img/pwc/danei5.png",
    "revision": "cb0eadfcc884a86d46ecf53fe2831560"
  },
  {
    "url": "img/pwc/danei6.png",
    "revision": "f9f08bd0a2cd622bf885063b03a10d9f"
  },
  {
    "url": "img/pwc/dianzishu.png",
    "revision": "112d636da92b189c4a14b5ef2f66a9b4"
  },
  {
    "url": "img/pwc/donglijiedian1.png",
    "revision": "dc8a934e1d765f6dfb9db426c5de8dd3"
  },
  {
    "url": "img/pwc/donglijiedian2.png",
    "revision": "ee6ea136b3a43d7d9d59bd6f36b87728"
  },
  {
    "url": "img/pwc/donglijiedian3.png",
    "revision": "a4b941688d557f1fba85dc27c07729ce"
  },
  {
    "url": "img/pwc/donglijiedian4.png",
    "revision": "c04e516aa2087ced8d687bfe7e4ce9d5"
  },
  {
    "url": "img/pwc/dongnao1.png",
    "revision": "359fbf60c8bfa83e9e1eb502e64325d6"
  },
  {
    "url": "img/pwc/dongnao2.png",
    "revision": "e94b4b569a38b0037cb6cb69fd83ea23"
  },
  {
    "url": "img/pwc/dongnao3.png",
    "revision": "bf0afabf45d63247bc3c2a8cd9b1ac53"
  },
  {
    "url": "img/pwc/dongnao4.png",
    "revision": "4251694121a510f64347edc4675688b8"
  },
  {
    "url": "img/pwc/dongnao5.png",
    "revision": "a81a27197fa58b6c13591feca5a9ab57"
  },
  {
    "url": "img/pwc/gitlablogin.png",
    "revision": "46785dfc74a19000c6d9c6bfef7a5418"
  },
  {
    "url": "img/pwc/gongkaike.png",
    "revision": "4c62cb063dbd231d941921b9d7738b32"
  },
  {
    "url": "img/pwc/gupao1.png",
    "revision": "822b7c5fb660a47960be2dd159c3474f"
  },
  {
    "url": "img/pwc/gupao2_1.png",
    "revision": "6c48f48b097d6963629787152523c8a8"
  },
  {
    "url": "img/pwc/gupao2.png",
    "revision": "7a56a9b4496f311aa527b7ca553b7e6c"
  },
  {
    "url": "img/pwc/gupao3_1.png",
    "revision": "2b88b30d1b14fde71f30739e82358638"
  },
  {
    "url": "img/pwc/gupao3_2.png",
    "revision": "e114ce180a0e64c7da72c788a13228fe"
  },
  {
    "url": "img/pwc/gupao3.png",
    "revision": "276dd5788e71cb76c05c6897d878d4e0"
  },
  {
    "url": "img/pwc/heima1.png",
    "revision": "d4974e92276b465016b1b98d1fbf2d3a"
  },
  {
    "url": "img/pwc/heima2.png",
    "revision": "b7402b8644b36446b48e398154590c7a"
  },
  {
    "url": "img/pwc/heima3.png",
    "revision": "f2031cf21d3aefe952ea8c3e6c22d090"
  },
  {
    "url": "img/pwc/index1.png",
    "revision": "75c25aa3b67c0c1f672b29ea2f03f725"
  },
  {
    "url": "img/pwc/index2.png",
    "revision": "71b25c267dc40c23d6f664e11ea0159d"
  },
  {
    "url": "img/pwc/index3.png",
    "revision": "2e8c77a2cd1540c12c61daf923929010"
  },
  {
    "url": "img/pwc/index4.png",
    "revision": "067c0d3cd711c3ace47d9c18d0c56439"
  },
  {
    "url": "img/pwc/index5.png",
    "revision": "411e7a2fda6f11d1447af25bf7f508b7"
  },
  {
    "url": "img/pwc/jiagoushi1.png",
    "revision": "e63e20910c3e2bce8c94f50ce803f2ac"
  },
  {
    "url": "img/pwc/jiashoushi2.png",
    "revision": "3ab1e1982f0f8876e204b84a92fbced8"
  },
  {
    "url": "img/pwc/jiejuewenti1.png",
    "revision": "f75401effb52b3cb5209d36edf89ff3a"
  },
  {
    "url": "img/pwc/jikexueyuan1_1.png",
    "revision": "61b01f2be9425ba4281eec6e166bbed2"
  },
  {
    "url": "img/pwc/jikexueyuan1_2.png",
    "revision": "486e96310c766618505c2bdc2940195d"
  },
  {
    "url": "img/pwc/jikexueyuan1.png",
    "revision": "18d632514b5cb1197076b8f7ef3b23c1"
  },
  {
    "url": "img/pwc/laobanhai2.png",
    "revision": "024b89a5e2486dc4dcaeb5832fa84f10"
  },
  {
    "url": "img/pwc/laonanhai1.png",
    "revision": "cbc43f1ef1d4ae58bbe1dd0218175586"
  },
  {
    "url": "img/pwc/laonanhai2.png",
    "revision": "0038d22ba241e75b8841e9a2d3fcefbb"
  },
  {
    "url": "img/pwc/laonanhai3.png",
    "revision": "988539ed3b790237f790b00a4b61a8ed"
  },
  {
    "url": "img/pwc/luban1.png",
    "revision": "6ac9462f28e9dc700b9dc922b149f1cf"
  },
  {
    "url": "img/pwc/luban2.png",
    "revision": "d43de6e01825b62ec06a7b6f9e43d957"
  },
  {
    "url": "img/pwc/luban3.png",
    "revision": "cecdfa199dcc4718ce56843403a82396"
  },
  {
    "url": "img/pwc/luban4.png",
    "revision": "06512715d0c66f5f246809a118484ade"
  },
  {
    "url": "img/pwc/luban5.png",
    "revision": "e46fbdc5a9a88166a046de2e984ad64e"
  },
  {
    "url": "img/pwc/luban6.png",
    "revision": "574f91b7df4013f225f3bca718bf854e"
  },
  {
    "url": "img/pwc/makewang1.png",
    "revision": "ab1d402f192cb591b853c8a43bb8d49d"
  },
  {
    "url": "img/pwc/mashibing.png",
    "revision": "7ff2a264f45d12719b72f893ac9aedc0"
  },
  {
    "url": "img/pwc/mashibing1.png",
    "revision": "929e80dad0eb5fb740e660e34b9fec8f"
  },
  {
    "url": "img/pwc/mashibing2.png",
    "revision": "d3c7d9f286ab7d9e2b8061f6f0a7ae69"
  },
  {
    "url": "img/pwc/mayi.png",
    "revision": "02bc190c6fb1b9d63ae9204dfb695f83"
  },
  {
    "url": "img/pwc/mayi1.png",
    "revision": "9569e5ca17fd9b795c99bc6007c9a7d1"
  },
  {
    "url": "img/pwc/mayi2.png",
    "revision": "3786c2d15869ed117679323091644815"
  },
  {
    "url": "img/pwc/mayi3.png",
    "revision": "2cedc060d752262007c971cce49252f7"
  },
  {
    "url": "img/pwc/mayi4.png",
    "revision": "5649a2e1adaaaae8b03bb397fd58cb44"
  },
  {
    "url": "img/pwc/me.jpg",
    "revision": "fabc4e777f3219edaf074f5c6670cbc9"
  },
  {
    "url": "img/pwc/mukewang2.png",
    "revision": "be50334cf059e6bc185defb53a238f6f"
  },
  {
    "url": "img/pwc/mukewang3.png",
    "revision": "eed11fbc505bd14c5b9c0bac84377c16"
  },
  {
    "url": "img/pwc/mukewang4.png",
    "revision": "79830e048ebb7184c837558ad5a455e8"
  },
  {
    "url": "img/pwc/mukewang5.png",
    "revision": "b63cad7a71c3d28f02a773464d75b1bf"
  },
  {
    "url": "img/pwc/my.png",
    "revision": "c73629bdba0074e8f102efe27683ae4d"
  },
  {
    "url": "img/pwc/qianfeng.png",
    "revision": "f4bef17520658f4bea8dbc7480b36cff"
  },
  {
    "url": "img/pwc/qianfeng1.png",
    "revision": "2a3fb33f74f8200f2c1cde1d71c3633f"
  },
  {
    "url": "img/pwc/qianfeng2.png",
    "revision": "2b6e9be20241a204e82975c6e9918200"
  },
  {
    "url": "img/pwc/qianfeng3.png",
    "revision": "36ccd1a3f694348cfb7ee7ab675fd1da"
  },
  {
    "url": "img/pwc/qianfeng4.png",
    "revision": "a982ffb7ef51c8507334a0a10d38460f"
  },
  {
    "url": "img/pwc/rengongzhineng1.png",
    "revision": "0f42c79107992022a37069ca6021c471"
  },
  {
    "url": "img/pwc/rengongzhineng2.png",
    "revision": "48aa402ab6cebe470f23f5c343352ab7"
  },
  {
    "url": "img/pwc/rengongzhineng3.png",
    "revision": "8e512df6a42a1709a446a8d0ed714c6e"
  },
  {
    "url": "img/pwc/rengongzhineng4.png",
    "revision": "44a4e4e7ac709b45c10f138263729b29"
  },
  {
    "url": "img/pwc/shanggui1.png",
    "revision": "ec6529eadd73b48d2555a6cde4b458d4"
  },
  {
    "url": "img/pwc/shanggui2.png",
    "revision": "cecc9ed3ec0f0521575668cbf807d6a1"
  },
  {
    "url": "img/pwc/shanggui3.png",
    "revision": "a3250f96f8ec6e37a94033a0709d4529"
  },
  {
    "url": "img/pwc/shanggui4_1.png",
    "revision": "408ced50468975fa30ef724ac656d62e"
  },
  {
    "url": "img/pwc/shanggui4_2.png",
    "revision": "5725651beafbdc24d18c7616b7e32513"
  },
  {
    "url": "img/pwc/shanggui4.png",
    "revision": "19dd6ebc234f3091df84ebe803fc4aff"
  },
  {
    "url": "img/pwc/shanggui5.png",
    "revision": "e545f480fdcedc2d7f24d52d05d8fadd"
  },
  {
    "url": "img/pwc/shanggui6_1.png",
    "revision": "8b136ec1439615d4161c482de6be17c7"
  },
  {
    "url": "img/pwc/shanggui6_2.png",
    "revision": "d2155c5e4d4d3d93bad2fdab3134b4fd"
  },
  {
    "url": "img/pwc/shanggui6.png",
    "revision": "34ba18838abc9b6882b02005b36eded9"
  },
  {
    "url": "img/pwc/shanggui7.png",
    "revision": "c513d11ac96abce8ddda9c042fd4f4ab"
  },
  {
    "url": "img/pwc/shangxue1.png",
    "revision": "5c72266373533ef9baa15aae3d4d353f"
  },
  {
    "url": "img/pwc/shangxue2.png",
    "revision": "5c7c65c4d10439276a22e73eec12b4a7"
  },
  {
    "url": "img/pwc/shangxue3.png",
    "revision": "283cc822505b128979466442f1e277f2"
  },
  {
    "url": "img/pwc/shangxue4.png",
    "revision": "caa54a8d04dec7a25305299e54f7b106"
  },
  {
    "url": "img/pwc/spring1_1.png",
    "revision": "9d06292f75d3cdaf79c6958c4709776a"
  },
  {
    "url": "img/pwc/spring1_2.png",
    "revision": "658a0a0e53c876002249113ba16695df"
  },
  {
    "url": "img/pwc/spring1_3.png",
    "revision": "b14fa9f837d386f8a6fc40c315980cfa"
  },
  {
    "url": "img/pwc/spring1_4.png",
    "revision": "dba1b8484f8236151eb0e8498f6ea801"
  },
  {
    "url": "img/pwc/tanzhoujiaoyu1.png",
    "revision": "c4dbe0e9f293b35219dff5df5c998df3"
  },
  {
    "url": "img/pwc/tanzhoujiaoyu2.png",
    "revision": "b2124cf4bf5454bd29d02e572b0da8d4"
  },
  {
    "url": "img/pwc/teng_dongnao.png",
    "revision": "0563806320e024911c9fc8b1ed553387"
  },
  {
    "url": "img/pwc/teng_gupao.png",
    "revision": "f78a6f6d0ab0f94129505b4d0ede1e68"
  },
  {
    "url": "img/pwc/teng_luban.png",
    "revision": "3869d7a8ba46459ff334983269b0b4a3"
  },
  {
    "url": "img/pwc/teng_luban1.png",
    "revision": "84af387d7c63018653cade84cf0c464b"
  },
  {
    "url": "img/pwc/teng_tuling.png",
    "revision": "3b0ef7218e3001897e6400d8a97fc322"
  },
  {
    "url": "img/pwc/teng_xiangxue.png",
    "revision": "5be903058df12b725fea0cd96e508844"
  },
  {
    "url": "img/pwc/teng_youxiao.png",
    "revision": "6748f8ff299dd8463b6faf6d008cf22c"
  },
  {
    "url": "img/pwc/tuling.png",
    "revision": "6df7b143df393586e8fa9259fae33713"
  },
  {
    "url": "img/pwc/tuling1.png",
    "revision": "fc9eb24f7ea53b4f1de54f173d129c31"
  },
  {
    "url": "img/pwc/tuling3.png",
    "revision": "df2afcc58a048da9a78a00ab1573a3f3"
  },
  {
    "url": "img/pwc/tuling4.png",
    "revision": "faa45e704bd8282fcddb23995a5df2e8"
  },
  {
    "url": "img/pwc/tuling5.png",
    "revision": "6450e3c43342879b03148498258150f0"
  },
  {
    "url": "img/pwc/tulling2.png",
    "revision": "c15d34dbe6a0a7a1473758bb54d57972"
  },
  {
    "url": "img/pwc/tuoxin1.png",
    "revision": "4ec8af14909681d052e3fd6a39f6f4b9"
  },
  {
    "url": "img/pwc/tuoxin2.png",
    "revision": "445552a0106abfb9ded1261337f2c0f2"
  },
  {
    "url": "img/pwc/tuoxin3.png",
    "revision": "c6f4fd5abd39f47339acd837d815825f"
  },
  {
    "url": "img/pwc/tuoxin4.png",
    "revision": "24bd1166953a24e904d13636576d42a9"
  },
  {
    "url": "img/pwc/xiangxue.png",
    "revision": "3dee320a205c2bcdfd04083623cbc2e9"
  },
  {
    "url": "img/pwc/xiangxue1.png",
    "revision": "0613b9c612c34e627f74f56cf04f767f"
  },
  {
    "url": "img/pwc/xiangxue2.png",
    "revision": "671e16a5e7f4124b1848a60a95bbfacb"
  },
  {
    "url": "img/pwc/xiangxue3.png",
    "revision": "e29c22d8b707fb095e7ffd80c824e88e"
  },
  {
    "url": "img/pwc/xiaomajava1.png",
    "revision": "e8c463c9b8764dd5f9d42169fbf3b9d5"
  },
  {
    "url": "img/pwc/xiaomajava2.png",
    "revision": "89d6527a315011869148d965d824ae15"
  },
  {
    "url": "img/pwc/xiaomajava3.png",
    "revision": "ae1c63cd5d43504f684a217a9c6dc9ab"
  },
  {
    "url": "img/pwc/xieliefenbushi7.png",
    "revision": "acdff086ff66c6124981a9cdee22ce4f"
  },
  {
    "url": "img/pwc/xiliefenbushi1.png",
    "revision": "2162807036971d3966351d2b84d878a6"
  },
  {
    "url": "img/pwc/xiliefenbushi2.png",
    "revision": "6eff3a0a73322ee56534be40b5ad117a"
  },
  {
    "url": "img/pwc/xiliefenbushi3.png",
    "revision": "1152fcefcbc28af5b40ad2a5c101b1db"
  },
  {
    "url": "img/pwc/xiliefenbushi4.png",
    "revision": "10bd297042334adafda6f014fe8c665d"
  },
  {
    "url": "img/pwc/xiliefenbushi5.png",
    "revision": "99f356c0478d5e50d40933e52328fe4a"
  },
  {
    "url": "img/pwc/xiliefenbushi6.png",
    "revision": "7559d66bdc464b894080e2f93be9573e"
  },
  {
    "url": "img/pwc/xiliefenbushi8.png",
    "revision": "46e53c3c5d0de8843eff327f3d96daaa"
  },
  {
    "url": "img/pwc/xiliefenbushi9.png",
    "revision": "74d21461cf3735850b18315882ff8817"
  },
  {
    "url": "img/pwc/xiongdi1.png",
    "revision": "a0c625f9b77189dfa40b88732f557da6"
  },
  {
    "url": "img/pwc/xiongdi2.png",
    "revision": "7bd2ba796ded3f16dad6d46c332256e8"
  },
  {
    "url": "img/pwc/xiongdi3.png",
    "revision": "f240201f6c18a0fddacfd084a9af7e9a"
  },
  {
    "url": "img/pwc/xiongdi4.png",
    "revision": "985e8656afa90b7c2e03c17c9b149e41"
  },
  {
    "url": "img/pwc/youxiao.png",
    "revision": "1bd78adffc99849bbf0e7b1345387da7"
  },
  {
    "url": "img/pwc/youxiao1.png",
    "revision": "c242d5de44575593df54c6ba4584ea38"
  },
  {
    "url": "img/pwc/youxiao2.png",
    "revision": "2ba338cf73cdb58b78d4d211bd985cbf"
  },
  {
    "url": "img/pwc/yuanmafenxi1.png",
    "revision": "f513ef05fb18444a4dae4ba39f37015f"
  },
  {
    "url": "img/pwc/zengsong1.png",
    "revision": "2754427fc90fcecde181054b9e856573"
  },
  {
    "url": "img/pwc/zengsong2.png",
    "revision": "8d45ef252c010fdb3956e41af7d07f01"
  },
  {
    "url": "img/pwc/zengsong3.png",
    "revision": "037e29ba41a68a829305163d0a34721d"
  },
  {
    "url": "img/pwc/zengsong4_1.png",
    "revision": "7df321b1d77ad4983252c96a276d085a"
  },
  {
    "url": "img/pwc/zengsong4_2.png",
    "revision": "57191aee075548349ff6090a9d12bfa8"
  },
  {
    "url": "img/pwc/zengsong4.png",
    "revision": "1dd39046fc73634f820e28951d6e5a54"
  },
  {
    "url": "img/touch/144x144logo.png",
    "revision": "45f8b3f82016697865987fe95527997f"
  },
  {
    "url": "img/touch/168x168logo.png",
    "revision": "613456d92c71894eee8124989e220a4c"
  },
  {
    "url": "img/touch/192x192logo.png",
    "revision": "1f4dc30546b3afcac38a711bed6f9ec9"
  },
  {
    "url": "img/touch/48x48logo.png",
    "revision": "56ec1f907e7207bf7ab52dfdd295a130"
  },
  {
    "url": "img/touch/72x72logo.png",
    "revision": "5721c15d563f317326a5d895c10183c7"
  },
  {
    "url": "img/touch/96x96logo.png",
    "revision": "beeca0c00053d9894128873521bcbf6f"
  },
  {
    "url": "index.html",
    "revision": "d982d78611ed57b7696876f8c9adf765"
  },
  {
    "url": "jingpin/1_jiagoushi.html",
    "revision": "78e608444ead0b049c2bbbde5a5a5864"
  },
  {
    "url": "jingpin/2_mukewang.html",
    "revision": "880f021828adc2a87582e3ef42424f96"
  },
  {
    "url": "jingpin/3_mashibing.html",
    "revision": "157f3ccd610a9c66793b7ed0db2a82aa"
  },
  {
    "url": "jingpin/4_rengongzhineng.html",
    "revision": "ca87b7e608103ca4f81b8cf0affa9591"
  },
  {
    "url": "jingpin/5_tanzhou.html",
    "revision": "21b4a1f78e2d4a9459cd999699f6a770"
  },
  {
    "url": "jingpin/6_tuoxin.html",
    "revision": "67fb2ac7d6d05585c3074050594d2875"
  },
  {
    "url": "jingpin/7_xiaomage.html",
    "revision": "d515648fffcde091428d7f72f4b8ebba"
  },
  {
    "url": "jingpin/8_xiliefenbushi.html",
    "revision": "63dd97ecd9aaa0c44eccba470cb3a172"
  },
  {
    "url": "jingpin/9_yuanmafenxi.html",
    "revision": "bb663e888b29e1a1a6f583f51b08b0d6"
  },
  {
    "url": "jingpin/index.html",
    "revision": "5b5b7537c714bbf91071344952a0c12f"
  },
  {
    "url": "massage/index.html",
    "revision": "a347ed8ad6089a6035cf912df5c1f0ba"
  },
  {
    "url": "peixunjigou/1_chuanzhi.html",
    "revision": "5194aeab995c64fb797f5e63f1590de3"
  },
  {
    "url": "peixunjigou/2_qianfeng.html",
    "revision": "c5e79ee3c9e0399a74e6d2853d575246"
  },
  {
    "url": "peixunjigou/3_shangguigu.html",
    "revision": "15810c40ea79ef68c4d411a8c1b7c743"
  },
  {
    "url": "peixunjigou/4_danei.html",
    "revision": "671eb26a86ace6a2ef3de4f4f1bf2ab9"
  },
  {
    "url": "peixunjigou/4_shangxuetang.html",
    "revision": "f6e73e9ac986d2c92980d6cd1e45d06b"
  },
  {
    "url": "peixunjigou/5_donglijiedian.html",
    "revision": "ce9710bcf2b8573277c6bb7e5bc62dad"
  },
  {
    "url": "peixunjigou/6_laonanhai.html",
    "revision": "b36fb6c00efcb36fa5e3fcca7dd040b4"
  },
  {
    "url": "peixunjigou/7_dongdilian.html",
    "revision": "a9daf06d76ce12351db234bce6475069"
  },
  {
    "url": "peixunjigou/index.html",
    "revision": "cc99ca7ad2c1f8eb92d54a21b981a3a6"
  },
  {
    "url": "tengxunketang/1_gupao.html",
    "revision": "d4927459f21041447bc0324aed2c1b07"
  },
  {
    "url": "tengxunketang/12_gongkaike.html",
    "revision": "b6fa2fe0106e946521fdb7c06f7bf147"
  },
  {
    "url": "tengxunketang/2_luban.html",
    "revision": "d76ce473c5f619256c325ceb6c2acca6"
  },
  {
    "url": "tengxunketang/3_dongnao.html",
    "revision": "b461e48302805670228355ceaa7fbc22"
  },
  {
    "url": "tengxunketang/4_mayi.html",
    "revision": "4ac469bd3d6a3c144baea7f7906aafef"
  },
  {
    "url": "tengxunketang/5_tuling.html",
    "revision": "062db49789106114540c70dac02ff89a"
  },
  {
    "url": "tengxunketang/6_xiangxue.html",
    "revision": "35c941c82ade24c3f99672e8c7857520"
  },
  {
    "url": "tengxunketang/7_youxiao.html",
    "revision": "190de4d54b3564f65304da4acac4ea3f"
  },
  {
    "url": "tengxunketang/index.html",
    "revision": "01eba067db0ab5e7cc304114d3f0eb03"
  },
  {
    "url": "zengsong/index.html",
    "revision": "4858192480994d5605cf2402935987ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
