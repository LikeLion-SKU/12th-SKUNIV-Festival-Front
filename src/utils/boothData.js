/**
 * left
 * 1번: top 90px, left 110px
 * 2번: top 100px, left 110px
 * 3번: top 115px, left 110px
 * 4번: top 130px, left 110px
 * 5번: top 147px, left 110px
 * 6번: top 167px, left 110px
 * 7번: top 185px, left 110px
 * 8번: top 195px, left 110px
 * 9번: top 215px, left 110px
 * 10번: top 227px, left 110px
 * 11번: top 242px, left 110px
 * 총학: top 75px, left 130px
 */

/**
 * right
 * 1번: top 70px, left 225px
 * 2번: top 35px, left 236px
 * 3번: top 45px, left 233px
 * 4번: top 55px, left 232px
 * 5번: top 65px, left 229px
 * 6번: top 75px, left 226px
 * 7번: top 85px, left 223px
 * 8번: top 98px, left 220px
 * 9번: top 108px, left 218px
 * 10번: top 118px, left 213px
 * 11번: top 125px, left 203px
 * 12번: top 128px, left 192px
 * 13번: top 133px, left 182px
 * 14번: top 137px, left 171px
 * 15번: top 141px, left 161px
 * 16번: top 145px, left 150px
 */

import ece from '../assets//images/logo/ece.png';
import eng from '../assets//images/logo/eng.png';
import fie from '../assets//images/logo/fie.png';
import archi from '../assets//images/logo/archi.png';
import french from '../assets//images/logo/french.png';
import ad from '../assets//images/logo/ad.png';
import chi from '../assets//images/logo/hyun.png';
import english from '../assets//images/logo/hyun.png';
import russian from '../assets//images/logo/hyun.png';
import japanese from '../assets//images/logo/hyun.png';
import human from '../assets//images/logo/human.png';
import hansup from '../assets//images/logo/hansup.png';
import seoro from '../assets//images/logo/seoro.png';
import news from '../assets//images/logo/news.png';
import music from '../assets//images/logo/music.png';
import sports from '../assets//images/logo/sports.png';
import film from '../assets//images/logo/film.png';
import design from '../assets//images/logo/design.png';
import beauty from '../assets//images/logo/beauty.png';
import artech from '../assets//images/logo/artech.png';
import educare from '../assets//images/logo/educare.png';
import buss from '../assets//images/logo/buss.png';
import society from '../assets//images/logo/society.png';
import publicc from '../assets//images/logo/publicc.png';
import military from '../assets//images/logo/military.png';
import software from '../assets//images/logo/software.png';
import urban from '../assets//images/logo/urban.png';
import logistics from '../assets//images/logo/logistics.png';
import ncbe from '../assets//images/logo/ncbe.png';
import art from '../assets//images/logo/art.png';

export const boothData = [
  //모두 저녁장사 메뉴만 기입
  //낮 장사만 하는 경우 낮 장사 메뉴 + 기입해주면 좋을 듯

  {
    //이공대 (한줄소개에 사진 요청)
    id: 1,
    boothNumber: 1,
    boothName: '불패무적이공대',
    major: 'NATURAL SCIENCE & ENGINEERING',
    intro:
      '✨서경제일 줄넘기✨\n평점: 10/10\n소인이 찾던 바로 그 대결이오.\n막차까지 즐기고 싶소이다.\n슬러시도 준다니 안 할 이유가 없소.',
    menuDay: {},
    menuNight: {
      슬러쉬: '1000원',
      '서경제일 줄넘기 대회': '1000원',
    },
    account: '카카오뱅크 3333-07-2024087 이현성',
    snsLink: 'https://www.instagram.com/sku_33rd_undefeated/',
    image: eng,
    top: 242,
    left: 110,
  },
  {
    //금공
    id: 2,
    boothNumber: 2,
    boothName: '금융정보공학과',
    major: 'Financial Information Engineering',
    intro: '후후 불면은 구멍이 생기는 커다란 솜사탕~~\n먹고가세요~',
    menuDay: {},
    menuNight: {
      솜사탕: '3000원',
      해물야끼우동: '13000원',
      '와앙 소시지야채볶음': '11000원',
      김치전: '7000원',
    },
    account: '카카오뱅크 3333150451124 김민지',
    snsLink: 'https://www.instagram.com/sku_fie/',
    image: fie,
    top: 227,
    left: 110,
  },
  {
    //전컴
    id: 3,
    boothNumber: 3,
    boothName: '전자컴퓨터공학과',
    major: 'Electronic Computer Engineering',
    intro:
      '안녕하십니까. 제2대 전자컴퓨터공학과입니다!\n2024 대동제에 저희 과는 낮에는 닭꼬치, 타코나초를 판매하고 풍선다트와 동전 던지기, 고래잡기를 진행할 예정입니다.\n밤에는 제육볶음과 부대찌개 등을 판매할 예정이니 많은 관심 부탁드립니다.',
    menuDay: {},
    menuNight: {
      닭꼬치: '3000원',
      타코나초: '4000원',
      제육볶음: '14000원',
      부대찌개: '7000원',
    },
    account: '카카오뱅크 3333-04-0745270 이효준',
    snsLink: 'https://www.instagram.com/sku_e.c.e/',
    image: ece,
    top: 215,
    left: 110,
  },
  {
    //토목
    id: 4,
    boothNumber: 4,
    boothName: '토목공학과',
    major: 'Civil & Architectural Engineering',
    intro:
      '안녕하세요 제 26대 토목건축공학과 학생회입니다~\n저희 토목건축공학과는 낮에는 에이드와 소세지를 판매하고 저녁에는 제육볶음,묵사발, 콘치즈불닭등을 판매할 예정이니 많이 찾아와주세요~',
    menuDay: {},
    menuNight: {
      '에이드(청포도·자몽·매실)': '2500원',
      소세지: '2000원',
      '제육볶음+주먹밥': '12000원',
      묵사발: '8000원',
    },
    account: '카카오뱅크 3333304394702 이윤재',
    snsLink: 'https://www.instagram.com/sku_civil.archi/',
    image: archi,
    top: 195,
    left: 110,
  },
  {
    //불어
    id: 5,
    boothNumber: 5,
    boothName: '불어전공',
    major: 'French Language',
    intro: '스콘스퀘어에서 챔스의 기운이…!\n불어의 FC FRENCH!',
    menuDay: {},
    menuNight: {
      콜팝: '4500원',
      소떡소떡: '4000원',
      대패숙주볶음: '12000원',
      허니버터갈릭감자: '8000원',
    },
    account: '토스뱅크 1000-3016-6425 구진모',
    snsLink: 'https://www.instagram.com/sku_frenchfries/',
    image: french,
    top: 185,
    left: 110,
  },
  {
    //광홍콘 _ 낮 장사만
    id: 6,
    boothNumber: 6,
    boothName: '광고홍보콘텐츠학과',
    major: 'Advertising & Public Relations Contents',
    intro:
      '너가 꼬치 먹자고 안 했잖아?\n그럼 대동제 안 왔어.\n- 광홍 오리지널 환승꼬치 ',
    menuDay: {},
    menuNight: {
      소세지: '3000원',
      닭꼬치: '3500원',
      치즈닭꼬치: '4000원',
      불닭마요닭꼬치: '4000원',
    },
    account: '카카오뱅크 3333217156016 김은서',
    snsLink: 'https://www.instagram.com/sku_ad_bada/',
    image: ad,
    top: 167,
    left: 110,
  },
  {
    //중어 _ 인스타 없음
    id: 7,
    boothNumber: 7,
    boothName: '중어전공',
    major: 'Chinese Language',
    intro: '중어의 아찔한 대륙 마라맛 승부!',
    menuDay: {},
    menuNight: {
      '마라탕(2인기준)': '12500원',
      '꿔바로우(大)': '9900원',
      '꿔바로우(小)': '7900원',
      빙홍차: '2000원',
    },
    account: '카카오뱅크 3333269256988 박소영',
    snsLink: '없음',
    image: chi,
    top: 147,
    left: 110,
  },
  {
    //영어 _ 인스타 없음, 낮 장사만
    id: 8,
    boothNumber: 8,
    boothName: '영어전공',
    major: 'English Language',
    intro:
      '※ 축제 기간 한정 머글 입장 가능\n(음료에 500원 추가 시 폴라로이드 사진 1장)',
    menuDay: {},
    menuNight: {
      버터비어: '3500원',
      체리에이드: '3000원',
      망고에이드: '3000원',
      블루시럽에이드: '3000원',
    },
    account: '카카오뱅크 3333262483085 임윤지',
    snsLink: '없음',
    image: english,
    top: 130,
    left: 110,
  },
  {
    //노어
    id: 9,
    boothNumber: 9,
    boothName: '노어전공',
    major: 'Russian Language',
    intro: '그대의 눈동자에 치얼스\n(낮 칵테일은 모두 3500원 입니다.)',
    menuDay: {},
    menuNight: {
      논알콜칵테일: '3000원',
      피나콜라다: '3000원',
      미도리샤워: '3000원',
      피치크러쉬: '3000원',
    },
    account: '카카오뱅크 3333-10-3918501 서지석',
    snsLink: 'https://www.instagram.com/skurussian/',
    image: russian,
    top: 115,
    left: 110,
  },
  {
    //일어 _ 인스타 없음
    id: 10,
    boothNumber: 10,
    boothName: '일어전공',
    major: 'Japanese Language',
    intro: '일본 현지의 느낌을 전해드립니다.',
    menuDay: {},
    menuNight: {
      '타코야끼(6개)': '3000원',
      '가라아게(6개)': '3000원',
      '교자(6개)': '3000원',
      '야끼소바(中)': '4000원',
    },
    account: '카카오뱅크 3333-30-1434183 백다연',
    snsLink: '없음',
    image: japanese,
    top: 100,
    left: 110,
  },
  {
    //인문대_낮 장사만 //수정
    id: 11,
    boothNumber: 11,
    boothName: '새늘 인문과학대학',
    major: 'COLLEGE OF HUMANITIES',
    intro: '다시 돌아온 인문대 시그니처\n구슬아이스크림과 필살기 신메뉴!',
    menuDay: {},
    menuNight: {
      '랜덤믹스 구슬 아이스크림': '5000원',
      '싱글초코 , 싱글 바닐라 , 더블초코 바닐라 ': '3000원',
    },
    account: '농협 302-4764-5483-11 이나은',
    snsLink: 'https://www.instagram.com/sku_34th_saeneul/',
    image: human,
    top: 90,
    left: 110,
  },
  {
    //총학
    id: 12,
    boothNumber: 12,
    boothName: '한숲 총학생회',
    major: 'Hansup',
    intro: '그대들의 풀잎, 하나의 숲으로',
    menuDay: {},
    menuNight: {
      '도레미파솔로시죠?': '1000원',
      반다나: '3000원',
      야광팔찌: '증정',
      칭따오_맥주_프로모션: '',
    },
    account: '신한은행 110548785040 김종휴',
    snsLink: 'https://www.instagram.com/sku_52nd_hansup/',
    image: hansup,
    top: 75,
    left: 130,
  },
  {
    //총동 _ 낮 장사만
    id: 13,
    boothNumber: 13,
    boothName: '서로 총동아리연합회',
    major: 'SEORO',
    intro: '우리 쪽도 와주세요. 자치기구도 챙겨주세요.',
    menuDay: {},
    menuNight: {
      타투스티커: '1000원',
      아이스티: '2000원',
      와플: '3000원',
      폴라로이드: '2000원',
    },
    account: '카카오뱅크 3333212409805 백수연',
    snsLink: 'https://www.instagram.com/sku_40th_seoro/',
    image: seoro,
    top: 70,
    left: 225,
  },
  {
    //신문사 _ 낮 장사만
    id: 14,
    boothNumber: 14,
    boothName: '신문사',
    major: 'sku_newspaper',
    intro: '다 신문사랑 해',
    menuDay: {},
    menuNight: {
      페이스페인팅: '2000원',
      디토카메라: '1000원',
      비눗방울: '1000원',
      컵솜사탕: '2000원',
    },
    account: '카카오뱅크 3333304688172',
    snsLink: 'https://www.instagram.com/sku_newspaper/',
    image: news,
    top: 70,
    left: 240,
  },
  {
    //실음
    id: 15,
    boothNumber: 15,
    boothName: '실용음악학부',
    major: 'Division of Contemporary Music',
    intro: '유일한 Jazz Pub 컨셉의 요리주점!!\n음악이 맛있고 음식이 착해요',
    menuDay: {},
    menuNight: {
      우삼겹숙주볶음: '10000원',
      삼겹살: '10000원',
      우동: '8000원',
      화채: '6000원',
    },
    account: '계좌 개설 예정',
    snsLink: 'https://www.instagram.com/skucm_official/',
    image:music,
    top: 83,
    left: 250,
  },
  {
    //스텍
    id: 16,
    boothNumber: 16,
    boothName: '스포츠테크놀리지학과',
    major: 'Sports and Technology',
    intro: '최선의 맛을 위해 쇠질했습니다.',
    menuDay: {},
    menuNight: {
      숙주볶음: '12000원',
      야끼우동: '13000원',
      부대찌개: '15000원',
      골뱅이소면: '12000원',
    },
    account: '신한은행 110-560-542752',
    snsLink:
      'https://www.instagram.com/sku_sports_technology?igsh=cHB2bXk3Yjc1N3Fz&utm_source=qr',
    image:sports,
    top: 97,
    left: 248,
  },
  {
    //영화
    id: 17,
    boothNumber: 17,
    boothName: '영화영상학과',
    major: 'Film and Digital Media',
    intro: '매주 영화 찍다가… 이제 요리도 한다…\n못하는 거 없는 영화과입니다!',
    menuDay: {},
    menuNight: {
      오꼬노미야끼: '8000원',
      군만두: '6000원',
      허니버터먹태: '8000원',
      후랑크소시지: '4000원',
    },
    account: '카카오뱅크 3333101130307 ',
    snsLink: 'https://www.instagram.com/sku_film/',
    image:film,
    top: 117,
    left: 245,
  },
  {
    //디자인
    id: 18,
    boothNumber: 18,
    boothName: '디자인학부',
    major: 'Design Division',
    intro: '이리 오너라 먹고놀자~~!',
    menuDay: {},
    menuNight: {
      두부김치: '8000원',
      김치전: '6000원',
      육개장: '6000원',
      수육: '12000원',
    },
    account: '신한은행 110-561-552653',
    snsLink: 'https://www.instagram.com/sku.design_/',
    image:design,
    top: 117,
    left: 245,
  },
  {
    //미예대
    id: 19,
    boothNumber: 19,
    boothName: '미용예술대학',
    major: 'COLLEGE OF BEUTY ART',
    intro:
      '🌻미용예술대학이 차린 미예 와이키키🌴로\n놀러와 다가올 여름을 느껴보세요🌻',
    menuDay: {},
    menuNight: {
      모듬소세지: '20000원',
      불고기콘치즈: '15000원',
      미예온더비치: '5000원',
      황도후르츠화채: '12000원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_beautyart/',
    image:beauty,
    top: 147,
    left: 238,
  },
  {
    //아텍
    id: 20,
    boothNumber: 20,
    boothName: '아트앤테크놀로지학과',
    major: 'Art and Technology',
    intro: '그만들 물어보세요',
    menuDay: {},
    menuNight: {
      분수화채: '5000원',
      해물깡: '3000원',
      짜계치: '4000원',
      커스텀슬러쉬: '3000원',
    },
    account: '신한은행 110548599729',
    snsLink: 'https://www.instagram.com/sku.artech/',
    image:artech,
    top: 157,
    left: 235,
  },
  {
    //아동
    id: 21,
    boothNumber: 21,
    boothName: '아동청소년학과',
    major: 'Child Studies',
    intro: '이 곳은 취객 입장 가능한 어‘른’이집 입니다. ',
    menuDay: {},
    menuNight: {
      전통떡꼬치: '2500원',
      '피카츄 돈가스': '3000원',
      닭갈비: '13000원',
      오뎅탕: '8000원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku__educare/',
    image:educare,
    top: 170,
    left: 230,
  },
  {
    //경영
    id: 22,
    boothNumber: 22,
    boothName: '경영학부',
    major: 'Division of Business Administration',
    intro: '에잇~~기분이다!!\n경영 농장 재료는 산지직송!!',
    menuDay: {},
    menuNight: {
      컵빙수: '4원',
      마약옥수수: '3000원',
      모듬전: '9000원',
      우동: '6000원',
    },
    account: '3333266546898 카카오뱅크 조영인',
    snsLink: 'https://www.instagram.com/sku_business/',
    image: buss,
    top: 190,
    left: 228,
  },
  {
    //사과대 _ 낮 장사만
    id: 23,
    boothNumber: 23,
    boothName: '우연 사회과학대학',
    major: 'sku_26th_wooyeon',
    intro: '우연히 홈런 -! ⚾️\n사과대 우연즈 🔗',
    menuDay: {},
    menuNight: {
      '츄러스(휘핑크림 추가 1,000원 / 초코시럽 추가 500원)': '3500원',
      회오리감자: '4000원',
    },
    account: '신한 110565116750 여재철',
    snsLink: 'https://www.instagram.com/sku_26th_wooyeon/',
    image:society,
    top: 198,
    left: 223,
  },
  {
    //공공 (별 두개가 볼드체인 것 같음)
    id: 24,
    boothNumber: 24,
    boothName: '공공인재학부',
    major: 'School of Public Service',
    intro: '*슬기로운 공공생활*\n축제에 취하면 무죄, 안 취하면 유죄',
    menuDay: {},
    menuNight: {
      '짜파게티(2인분)': '7000원',
      두부김치: '15000원',
      양념콜팝: '5500원',
      건빵: '-원',
    },
    account: '카카오뱅크 3333259993777',
    snsLink: 'https://www.instagram.com/sku_public/',
    image:publicc,
    top: 210,
    left: 208,
  },
  {
    //군사
    id: 25,
    boothNumber: 25,
    boothName: '군사학과',
    major: 'Military Studies',
    intro: '사       격이 맛있고\n랑(안) 주가 재밌는\n꾼               사부스',
    menuDay: {},
    menuNight: {
      대패삼겹비빔면: '15000원',
      스팸계란: '6000원',
      부대찌개: '17000원',
      볶음밥: '8000원',
    },
    account: '신한 110562502990 오대희',
    snsLink: 'https://www.instagram.com/16th_military_wave/',
    image:military,
    top: 210,
    left: 196,
  },
  {
    //소웨
    id: 26,
    boothNumber: 26,
    boothName: '소프트웨어학과',
    major: 'Software',
    intro: '우리가 안 먹은게 뭐가 있지?\n소웨 오돌뼈?\n웅 마쟈 정답<^^>',
    menuDay: {},
    menuNight: {
      '오돌뼈+주먹밥': '15000원',
      어묵우동: '10000원',
      제육볶음: '12000원',
      오뎅탕: '9500원',
    },
    account: '카카오뱅크 3333235803945 정수경',
    snsLink: 'https://www.instagram.com/sku_software/',
    image:software,
    top: 218,
    left: 183,
  },
  {
    //도공
    id: 27,
    boothNumber: 27,
    boothName: '도시공학과',
    major: 'Urban Planning & Engineering',
    intro: '혼자 와서 둘이 되는 도시남녀의 사랑포차❣️',
    menuDay: {},
    menuNight: {
      삼겹두부김치: '12000원',
      떡만두라면: '7000원',
      모둠감자튀김: '12000원',
      황도: '10000원',
    },
    account: '우리은행 1002563935986',
    snsLink: 'https://www.instagram.com/sku_urban/',
    image:urban,
    top: 223,
    left: 170,
  },
  {
    //물공 _ 꼬치 3개 12000원
    id: 28,
    boothNumber: 28,
    boothName: '물류시스템공학과',
    major: 'Logistics System Engineering',
    intro:
      '레전드 뿌링클 콜팝과 삼겹살꼬치를\n이 가격에 즐길 수 있다고??..\n바로 슈팅해~~\nP.S.저희 학생회 일동은 끼쟁이들이 많습니다^^',
    menuDay: {},
    menuNight: {
      '삼겹살꼬치 1개': '4500원',
      순두부열라면: '6000원',
      '뿌링클 콜팝': '4500원',
      '김치전&감자전': '6000원',
    },
    account: '국민은행 937702-00-892914 김대호',
    snsLink: 'https://www.instagram.com/sku_logistics/',
    image:logistics,
    top: 230,
    left: 157,
  },
  {
    //나화생
    id: 29,
    boothNumber: 29,
    boothName: '나노화학생명공학과',
    major: 'Nano-Chemical & Environmental Engineering',
    intro:
      '마침 배고파질 참이었는데\n나화생 덕분에 너무 재밌짜나 ?✨️💓\n완전 럭키비키쟈낭🍀🍀',
    menuDay: {},
    menuNight: {
      '뉴욕핫도그(오리지널)': '3900원',
      버블티: '3300원',
      두부김치: '9900원',
      묵사발: '7900원',
    },
    account: '카카오뱅크 3333247747187 진소명',
    snsLink: 'https://www.instagram.com/sku_n.c.b.e/',
    image:ncbe,
    top: 238,
    left: 143,
  },
  {
    //예대
    id: 30,
    boothNumber: 30,
    boothName: '울림예술대',
    major: 'COLLEGE OF ARTS',
    intro:
      '🚨울림 팔찌 안 차면 수갑 채워드립니다🚨\n당신은 변호사를 선임할 수 있고 …[더보기]',
    menuDay: {},
    menuNight: {},
    account: '-',
    snsLink: 'https://www.instagram.com/sku_woolim_art/',
    image:art,
    top: 147,
    left: 238,
  },
];
