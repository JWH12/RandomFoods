//★ 음식 데이터

const stateCombination = [
  // ★★★★★★★★★★★★★★★★★★ 밥 ★★★★★★★★★★★★★★★★★★
  // *************************** 한식 ***************************
  // 밥 - 한식 - 안매운거 - 뜨거운거

  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/bibimbap.jpg",
    description: "비빔밥",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/bulgogi.png",
    description: "불고기",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/galbijjim.jfif",
    description: "갈비찜",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/miyeoggug.jpg",
    description: "미역국",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/gugbab.jpg",
    description: "국밥",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/doenjangjjigae.jpg",
    description: "된장찌개",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/samgyeobsal.jfif",
    description: "삼겹살",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/jjukkumi.jpg",
    description: "찜닭",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/mandugug.jpg",
    description: "만두국",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/korea/tteoggug.jpg",
    description: "떡국",
  },

  // 밥 - 한식 - 안매운거 - 차가운거
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/korea/mugbab.jpg",
    description: "도토리 묵밥",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/korea/naeng_gug.jpg",
    description: "오이 냉국",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/korea/dongchimi.jpg",
    description: "동치미",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/korea/ganjang-gejang.jpg",
    description: "간장게장",
  },

  // 밥 - 한식 - 매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/gimchijjigae.jpg",
    description: "김치찌개",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/agujjim.jpg",
    description: "아구찜",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/deung-galbijjim.jpg",
    description: "매운 등갈비찜",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/jjukkumi.jpg",
    description: "쭈꾸미 볶음",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/dongtaetang.jpg",
    description: "동태탕",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/haemuljjim.jpg",
    description: "해물찜",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/galchijolim.png",
    description: "갈치조림",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../riceImg/korea/dalg_galbi.jpg",
    description: "닭갈비",
  },
  // 밥 - 한식 - 매운거 - 차가운거
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../riceImg/korea/yangnyeomgejang.jpg",
    description: "양념게장",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../riceImg/korea/kimchi.jpg",
    description: "김치",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../riceImg/korea/chomuchim.jpg",
    description: "오징어 초무침",
  },
  {
    combination: "RICE_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../riceImg/korea/hong-eohoe.jpg",
    description: "홍어회 무침",
  },

  // *************************** 중식 ***************************
  // 밥 - 중식 - 안매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/china/jjajang_bab.jpg",
    description: "짜장 밥",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/china/gesal_bokk.jpg",
    description: "게살 볶음밥",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/china/dongpayug.jpg",
    description: "동파육",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/china/gochujabchaebab.jpg",
    description: "고추잡채밥",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/china/yusanseul.jpg",
    description: "유산슬",
  },

  // 밥 - 중식 - 안매운거 - 차가운거
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/china/haepalinaengchae.jpg",
    description: "해파리냉채",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/china/naengchaejogbal.jpg",
    description: "냉채족발",
  },
  // 밥 - 중식 - 매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../riceImg/china/mapadubu.jpg",
    description: "마파두부",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../riceImg/china/lajogi.jpg",
    description: "라조기",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../riceImg/china/malasyang.png",
    description: "마라샹궈",
  },
  {
    combination: "RICE_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../riceImg/china/gajibokk-eum.jpg",
    description: "사천식 가지볶음",
  },
  // 밥 - 중식 - 매운거 - 차가운거
  {
    combination: "RICE_FOOD-CHINESE_FOODS-SPICY-ICE",
    image: "../riceImg/china/dalgnaengchae.jpg",
    description: "사천 닭냉채",
  },

  // *************************** 일식 ***************************
  // 밥 - 일식 - 안매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/japan/Katsudon.jpg",
    description: "가츠동",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/japan/tendon.jpg",
    description: "텐동",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/japan/gyudon.jpg",
    description: "규동",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/japan/donburi.png",
    description: "돈부리",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/japan/sukiyaki.jpg",
    description: "스키야키",
  },

  // 밥 - 일식 - 안매운거 - 차가운거
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/japan/sushi.jpeg",
    description: "초밥",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/japan/naengmisosilu.jfif",
    description: "냉미소시루",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/japan/ochajeuke.jfif",
    description: "냉오차즈케",
  },

  // 밥 - 일식 - 매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-SPICY-HOT",
    image: "../riceImg/japan/curry.jfif",
    description: "카레라이스",
  },
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-SPICY-HOT",
    image: "../riceImg/japan/wasabi.png",
    description: "와사비 덮밥",
  },
  // 밥 - 일식 - 매운거 - 차가운거
  {
    combination: "RICE_FOOD-JAPANESE_FOODS-SPICY-ICE",
    image: "loading.gif",
    description: "",
  },

  // *************************** 양식 ***************************
  // 밥 - 양식 - 안매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/western/beef_steak.png",
    description: "비프 스테이크",
  },
  {
    combination: "RICE_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/western/roast_beef.jpg",
    description: "로스트 비프",
  },
  {
    combination: "RICE_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/western/Parmesan.jpg",
    description: "치킨 파마산",
  },
  {
    combination: "RICE_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/western/pilau.jpg",
    description: "필라프",
  },
  {
    combination: "RICE_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../riceImg/western/chicken.jpg",
    description: "치킨",
  },
  // 밥 - 양식 - 안매운거 - 차가운거
  {
    combination: "RICE_FOOD-WESTERN_FOODS-NOT_SPICY-ICE",
    image: "../riceImg/western/Beef_Salad.jpg",
    description: "비프 샐러드",
  },
  {
    combination: "RICE_FOOD-WESTERN_FOODS-SPICY-ICE",
    image: "../riceImg/western/Caesar_Salad.jpg",
    description: "치킨 시저 샐러드",
  },
  // 밥 - 양식 - 매운거 - 뜨거운거
  {
    combination: "RICE_FOOD-WESTERN_FOODS-SPICY-HOT",
    image: "../riceImg/western/chili_con_carne.jpg",
    description: "칠리 콘 카르네",
  },
  {
    combination: "RICE_FOOD-WESTERN_FOODS-SPICY-HOT",
    image: "../riceImg/western/paella.jpg",
    description: "해산물 파에야",
  },
  // 밥 - 양식 - 매운거 - 차가운거
  {
    combination: "RICE_FOOD-WESTERN_FOODS-SPICY-ICE",
    image: "loading.gif",
    description: "",
  },

  // ★★★★★★★★★★★★★★★★★★ 면 ★★★★★★★★★★★★★★★★★★
  // *************************** 한식 ***************************
  // 면 - 한식 - 안매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/korea/janchigugsu.jpg",
    description: "잔치국수",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/korea/kalgugsu.jpg",
    description: "칼국수",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/korea/jabchae.jpg",
    description: "잡채",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/korea/gogigugsu.jpg",
    description: "고기국수",
  },
  // 면 - 한식 - 안매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../noodleImg/korea/naengmyeon.jpg",
    description: "냉면",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../noodleImg/korea/maggugsu.jpg",
    description: "막국수",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../noodleImg/korea/kong-gugsu.jpg",
    description: "콩국수",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-NOT_SPICY-ICE",
    image: "../noodleImg/korea/milmyeon.jfif",
    description: "밀면",
  },

  // 면 - 한식 - 매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-SPICY-HOT",
    image: "../noodleImg/korea/ramen.jpg",
    description: "라면",
  },
  // 면 - 한식 - 매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../noodleImg/korea/jjolmyeon.jfif",
    description: "쫄면",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../noodleImg/korea/bibimnaengmyeon.jpg",
    description: "비빔냉면",
  },
  {
    combination: "NOODEL_FOOD-KOREA_FOODS-SPICY-ICE",
    image: "../noodleImg/korea/bibimgugsu.jpg",
    description: "비빔국수",
  },

  // *************************** 중식 ***************************
  // 면 - 중식 - 안매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/china/jjajangmyeon.jpg",
    description: "짜장면",
  },
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/china/uyugmyeon.jpg",
    description: "우육면",
  },
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/china/yeolganmyeon.jpg",
    description: "열간면",
  },
  // 면 - 중식 - 안매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-NOT_SPICY-ICE",
    image: "loading.gif",
    description: "",
  },
  // 면 - 중식 - 매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../noodleImg/china/malatang.png",
    description: "마라탕",
  },
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../noodleImg/china/tantanmyeon.jpg",
    description: "탄탄면",
  },
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-SPICY-HOT",
    image: "../noodleImg/china/sacheon.jpg",
    description: "사천 짜장면",
  },
  // 면 - 중식 - 매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-CHINESE_FOODS-SPICY-ICE",
    image: "../noodleImg/china/naengjjamppong.jpg",
    description: "냉짬뽕",
  },

  // *************************** 일식 ***************************
  // 면 - 일식 - 안매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/tonkotsu.jpg",
    description: "돈코츠 라멘",
  },
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/miso.jpg",
    description: "미소 라멘",
  },
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/soba.jpg",
    description: "메밀소바",
  },
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/yakisoba.jpg",
    description: "야키소바",
  },
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/nagasaki.jfif",
    description: "나가사키 짬뽕",
  },
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/udon.jpg",
    description: "우동",
  },
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/japan/tsukemen.jfif",
    description: "츠케멘",
  },

  // 면 - 일식 - 안매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-NOT_SPICY-ICE",
    image: "../noodleImg/japan/naeng_udong.jpg",
    description: "냉우동",
  },
  // 면 - 일식 - 매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-SPICY-HOT",
    image: "loading.gif",
    description: "",
  },
  // 면 - 일식 - 매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-JAPANESE_FOODS-SPICY-ICE",
    image: "../noodleImg/japan/hilosima.jpg",
    description: "히로시마 츠케멘",
  },

  // *************************** 양식 ***************************
  // 면 - 양식 - 안매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/cream_pasta.jfif",
    description: "크림 파스타",
  },
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/allioollio.jpg",
    description: "알리오올리오",
  },
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/rose_cream.jpg",
    description: "로제 크림 파스타",
  },
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/vongole.jpg",
    description: "봉골레 파스타",
  },
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/tomato.jfif",
    description: "토마토 파스타",
  },
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/meatball.jpg",
    description: "미트볼 파스타",
  },
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-HOT",
    image: "../noodleImg/western/Toowoomba.jpg",
    description: "투움바 파스타",
  },
  // 면 - 양식 - 안매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-NOT_SPICY-ICE",
    image: "../noodleImg/western/Caprese.jfif",
    description: "카프레제 파스타 샐러드",
  },
  // 면 - 양식 - 매운거 - 뜨거운거
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-SPICY-HOT",
    image: "../noodleImg/western/Arrabiata.jfif",
    description: "아라비아따 파스타",
  },
  // 면 - 양식 - 매운거 - 차가운거
  {
    combination: "NOODEL_FOOD-WESTERN_FOODS-SPICY-ICE",
    image: "loading.gif",
    description: "",
  },

  // ★★★★★★★★★★★★★★★★★★ 빵 ★★★★★★★★★★★★★★★★★★
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/buger.png",
    description: "햄버거",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/sandwich.jpg",
    description: "샌드위치",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/pizza.jpg",
    description: "피자",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/toast.jpg",
    description: "토스트",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/brio.png",
    description: "브리오슈",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/goro.jpg",
    description: "고로케",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/bagel.png",
    description: "베이글",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/dough.jpg",
    description: "도넛",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/hotdog.jpg",
    description: "핫도그",
  },
  {
    combination: "BREAD_FOOD",
    image: "../breadImg/cake.jpg",
    description: "케이크",
  },

  // ★★★★★★★★★★★★★★★★★★ 간식 ★★★★★★★★★★★★★★★★★★

  // 간식 - 안매운거 - 뜨거운거
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/bungeobbang.jpg",
    description: "붕어빵",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/hotteok.jpg",
    description: "호떡",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/eomug.jpg",
    description: "어묵",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/sundae.jpg",
    description: "순대",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/sweet_potato.png",
    description: "고구마",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/algamja.jpg",
    description: "알감자",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/fry.jpg",
    description: "튀김",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/hoppang.png",
    description: "호빵",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/mandu.jpg",
    description: "만두",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-HOT",
    image: "../snackImg/takoyaki.jpg",
    description: "타코야끼",
  },
  // 간식 - 안매운거 - 차가운거
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/icecream.jpg",
    description: "아이스크림",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/tanghulu.jpg",
    description: "탕후루",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/jelly.jpg",
    description: "젤리",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/bingsu.jpg",
    description: "빙수",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/slush.jpeg",
    description: "슬러시",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/hwachae.jpg",
    description: "화채",
  },
  {
    combination: "SNACK_FOOD-NOT_SPICY-ICE",
    image: "../snackImg/edamame.jfif",
    description: "에다마메",
  },
  // 간식 - 매운거 - 뜨거운거
  {
    combination: "SNACK_FOOD-SPICY-HOT",
    image: "../snackImg/tteokbokki.jfif",
    description: "떡볶이",
  },
  {
    combination: "SNACK_FOOD-SPICY-HOT",
    image: "../snackImg/spicy_eomug.jpeg",
    description: "매운 어묵",
  },
  {
    combination: "SNACK_FOOD-SPICY-HOT",
    image: "../snackImg/chicken_feet.jpg",
    description: "닭발",
  },
  {
    combination: "SNACK_FOOD-SPICY-HOT",
    image: "../snackImg/hot_wings.jpg",
    description: "핫 윙",
  },
  {
    combination: "SNACK_FOOD-SPICY-HOT",
    image: "../snackImg/gimchijeon.jpg",
    description: "김치전",
  },
  // 간식 - 매운거 - 차가운거
  {
    combination: "SNACK_FOOD-SPICY-ICE",
    image: "loading.gif",
    description: "",
  },
];

export default stateCombination;
