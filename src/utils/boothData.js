/**
 * left
 * 1번: top 25px, left 122px
 * 2번: top 35px, left 122px
 * 3번: top 45px, left 122px
 * 4번: top 55px, left 122px
 * 5번: top 70px, left 122px
 * 6번: top 80px, left 122px
 * 7번: top 95px, left 122px
 * 8번: top 105px, left 122px
 * 9번: top 115px, left 122px
 * 10번: top 130px, left 122px
 * 11번: top 140px, left 122px
 * 12번: top 150px, left 122px
 */

/**
 * right
 * 1번: top 25px, left 240px
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

export const boothData = [
  //모두 저녁장사 메뉴만 기입
  //낮 장사만 하는 경우 낮 장사 메뉴 + 기입해주면 좋을 듯

  {//이공대
    id: 1,
    boothNumber: 1,
    boothName: '불패무적이공대',
    major: 'NATURAL SCIENCE & ENGINEERING',
    intro: 'test',
    menu: {
      슬러쉬: '-원',
      미니게임: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_33rd_undefeated/'
  },
  {//금공
    id: 2,
    boothNumber: 2,
    boothName: '금융정보공학과',
    major: 'Financial Information Engineering',
    intro: 'test',
    menu: {
      해물야끼우동: '-원',
      소시지야채볶음: '-원',
      김치전: '-원',
      오뎅탕: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_fie/'
  },
  {//전컴
    id: 3,
    boothNumber: 3,
    boothName: '전자컴퓨터공학과',
    major: 'Electronic Computer Engineering',
    intro: 'test',
    menu: {
      닭꼬치: '-원',
      제육볶음: '-원',
      콘치즈: '-원',
      부대찌개: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_e.c.e/'
  },
  {//토목
    id: 4,
    boothNumber: 4,
    boothName: '토목공학과',
    major: 'Civil & Architectural Engineering',
    intro: 'test',
    menu: {
      콘치즈불닭: '-원',
      제육주먹밥: '-원',
      짬뽕탕: '-원',
      소세지: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_civil.archi/'
  },
  {//불어
    id: 5,
    boothNumber: 5,
    boothName: '불어전공',
    major: 'French Language',
    intro: '스콘스퀘어에서 챔스의 기운이…! 불어의 FC FRENCH!',
    menu: {
      콜팝: '4500원',
      소떡소떡: '4000원',
      대패숙주볶음: '12000원',
      허니버터갈릭감자: '8000원',
    },
    account: '토스뱅크 1000-3016-6425 구진모',
    snsLink: 'https://www.instagram.com/sku_frenchfries/'
  },
  {//광홍콘 _ 낮 장사만
    id: 6,
    boothNumber: 6,
    boothName: '광고홍보콘텐츠학과',
    major: 'Advertising & Public Relations Contents',
    intro: '너가 꼬치 먹자고 안 했잖아? 그럼 대동제 안 왔어.  - 광홍 오리지널 환승꼬치 ',
    menu: {
      소세지: '3000원',
      닭꼬치: '3500원',
      치즈닭꼬치: '4000원',
      불닭마요닭꼬치: '4000원',
    },
    account: '카카오뱅크 3333217156016 김은서',
    snsLink: 'https://www.instagram.com/sku_ad_bada/'
  },
  {//중어 _ 인스타 없음
    id: 7,
    boothNumber: 7,
    boothName: '중어전공',
    major: 'Chinese Language',
    intro: '중어의 아찔한 대륙 마라맛 승부!',
    menu: {
      '마라탕(2인기준)': '12500원',
      '꿔바로우(大)': '9900원',
      '꿔바로우(小)': '7900원',
      빙홍차: '2000원',
    },
    account: '카카오뱅크 3333269256988 박소영',
    snsLink: '없음'
  },
  {//영어 _ 인스타 없음, 낮 장사만
    id: 8,
    boothNumber: 8,
    boothName: '영어전공',
    major: 'English Language',
    intro: '※ 축제 기간 한정 머글 입장 가능 (음료에 500원 추가 시 폴라로이드 사진 1장)',
    menu: {
      버터비어: '3500원',
      체리에이드: '3000원',
      망고에이드: '3000원',
      블루시럽에이드: '3000원',
    },
    account: '카카오뱅크 3333262483085 임윤지',
    snsLink: '없음'
  },
  {//노어
    id: 9,
    boothNumber: 9,
    boothName: '노어전공',
    major: 'Russian Language',
    intro: '그대의 눈동자에 치얼스 (낮 칵테일은 모두 3500원 입니다.)',
    menu: {
      논알콜칵테일: '3000원',
      피나콜라다: '3000원',
      미도리샤워: '3000원',
      피치크러쉬: '3000원',
    },
    account: '카카오뱅크 3333-10-3918501 서지석',
    snsLink: 'https://www.instagram.com/skurussian/'
  },
  {//일어 _ 인스타 없음
    id: 10,
    boothNumber: 10,
    boothName: '일어전공',
    major: 'Japanese Language',
    intro: '일본 현지의 느낌을 전해드립니다.',
    menu: {
      '타코야끼(6개)': '3000원',
      '가라아게(6개)': '3000원',
      '교자(6개)': '3000원',
      '야끼소바(中)': '4000원'
    },
    account: '카카오뱅크 3333-30-1434183 백다연',
    snsLink: '없음'
  },
  {//인문대_낮 장사만 //수정
    id: 11,
    boothNumber: 11,
    boothName: '새늘 인문과학대학',
    major: 'COLLEGE OF HUMANITIES',
    intro: '다시 돌아온 인문대 시그니처 구슬아이스크림과 필살기 신메뉴!',
    menu: {
      '랜덤믹스 구슬 아이스크림': '5000원',
      '싱글초코 , 싱글 바닐라 , 더블초코 바닐라 ': '3000원',
    },
    account: '농협 302-4764-5483-11 이나은',
    snsLink: 'https://www.instagram.com/sku_34th_saeneul/'
  },
  {//총학
    id: 12,
    boothNumber: 12,
    boothName: 'HANSUP 총학생회',
    major: 'skuhansup',
    intro: 'test',
    menu: {
      도레미파솔로시죠: '-원',
      반다나: '-원',
      야광팔찌: '-원',
      칭따오_맥주_프로모션: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_52nd_hansup/'
  },
  {//총동 _ 낮 장사만
    id: 13,
    boothNumber: 13,
    boothName: '총동아리연합회',
    major: '서로 총동아리연합회',
    intro: 'test',
    menu: {
      원조커피: '-원',
      아이스티: '-원',
      와플: '-원',
      폴라로이드: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_40th_seoro/'
  },
  {//신문사 _ 낮 장사만
    id: 14,
    boothNumber: 14,
    boothName: '신문사',
    major: 'sku_newspaper',
    intro: '다 신문사랑 해',
    menu: {
      페이스페인팅: '2000원',
      디토카메라: '1000원',
      비눗방울: '1000원',
      컵솜사탕: '2000원',
    },
    account: '카카오뱅크 3333304688172',
    snsLink: 'https://www.instagram.com/sku_newspaper/'
  },
  {//실음
    id: 15,
    boothNumber: 15,
    boothName: '실용음악학부',
    major: 'Division of Contemporary Music',
    intro: '유일한 Jazz Pub 컨셉의 요리주점!! 음악이 맛있고 음식이 착해요',
    menu: {
      우삼겹숙주볶음: '10000원',
      삼겹살: '10000원',
      우동: '8000원',
      화채: '6000원',
    },
    account: '계좌 개설 예정',
    snsLink: 'https://www.instagram.com/skucm_official/'
  },
  {//스텍
    id: 16,
    boothNumber: 16,
    boothName: '스포츠테크놀리지학과',
    major: 'Sports and Technology',
    intro: '최선의 맛을 위해 쇠질했습니다.',
    menu: {
      숙주볶음: '12000원',
      야끼우동: '13000원',
      부대찌개: '15000원',
      골뱅이소면: '12000원',
    },
    account: '신한은행 110-560-542752',
    snsLink: 'https://www.instagram.com/sku_sports_technology?igsh=cHB2bXk3Yjc1N3Fz&utm_source=qr'
  },
  {//영화
    id: 17,
    boothNumber: 17,
    boothName: '영화영상학과',
    major: 'Film and Digital Media',
    intro: '매주 영화 찍다가… 이제 요리도 한다… 못하는 거 없는 영화과입니다!',
    menu: {
      오꼬노미야끼: '8000원',
      군만두: '6000원',
      허니버터먹태: '8000원',
      후랑크소시지: '4000원',
    },
    account: '카카오뱅크 3333101130307 ',
    snsLink: 'https://www.instagram.com/sku_film/'
  },
  {//디자인
    id: 18,
    boothNumber: 18,
    boothName: '디자인학부',
    major: 'Design Division',
    intro: '이리 오너라 먹고놀자~~!',
    menu: {
      두부김치: '8000원',
      김치전: '6000원',
      육개장: '6000원',
      수육: '12000원',
    },
    account: '신한은행 110-561-552653',
    snsLink: 'https://www.instagram.com/sku.design_/'
  },
  {//미예대
    id: 19,
    boothNumber: 19,
    boothName: '미용예술대학',
    major: 'COLLEGE OF BEUTY ART',
    intro: '🌻미용예술대학이 차린 미예 와이키키🌴로 놀러와 다가올 여름을 느껴보세요🌻',
    menu: {
      모듬소세지: '20000원',
      불고기콘치즈: '15000원',
      미예온더비치: '5000원',
      황도후르츠화채: '12000원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_beautyart/'
  },
  {//아텍
    id: 20,
    boothNumber: 20,
    boothName: '아트앤테크놀로지학과',
    major: 'Art and Technology',
    intro: '그만들 물어보세요',
    menu: {
      분수화채: '5000원',
      해물깡: '3000원',
      짜계치: '4000원',
      커스텀슬러쉬: '3000원',
    },
    account: '신한은행 110548599729',
    snsLink: 'https://www.instagram.com/sku.artech/'
  },
  {//아동
    id: 21,
    boothNumber: 21,
    boothName: '아동청소년학과',
    major: 'Child Studies',
    intro: '이 곳은 취객 입장 가능한 어‘른’이집 입니다. ',
    menu: {
      전통떡꼬치 : '2500원',
      '피카츄 돈가스': '3000원',
      닭갈비: '13000원',
      오뎅탕: '8000원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku__educare/'
  },
  {//경영
    id: 22,
    boothNumber: 22,
    boothName: '경영학부',
    major: 'Division of Business Administration',
    intro: '에잇~~기분이다!! 경영 농장 재료는 산지직송!!',
    menu: {
      컵빙수: '4원',
      마약옥수수: '3000원',
      모듬전: '9000원',
      우동: '6000원',
    },
    account: '3333266546898 카카오뱅크 조영인',
    snsLink: 'https://www.instagram.com/sku_business/'
  },
  {//사과대 _ 낮 장사만
    id: 23,
    boothNumber: 23,
    boothName: '우연 사회과학대학',
    major: 'sku_26th_wooyeon',
    intro: '우연히 홈런 -! ⚾️ 사과대 우연즈 🔗',
    menu: {
      '츄러스(휘핑크림 추가 1,000원 / 초코시럽 추가 500원)': '3500원',
      회오리감자: '4000원',
    },
    account: '신한 110565116750 여재철',
    snsLink: 'https://www.instagram.com/sku_26th_wooyeon/'
  },
  {//공공
    id: 24,
    boothNumber: 24,
    boothName: '공공인재학부',
    major: 'School of Public Service',
    intro: '*슬기로운 공공생활* 축제에 취하면 무죄, 안 취하면 유죄',
    menu: {
      '짜파게티(2인분)': '7000원',
      두부김치: '15000원',
      양념콜팝: '5500원',
      건빵: '-원',
    },
    account: '카카오뱅크 3333259993777',
    snsLink: 'https://www.instagram.com/sku_public/'
  },
  {//군사
    id: 25,
    boothNumber: 25,
    boothName: '군사학과',
    major: 'Military Studies',
    intro: '사격이 맛있고 /    랑(안)주가 재밌는 /    꾼사부스',
    menu: {
      대패삼겹비빔면: '15000원',
      스팸계란: '6000원',
      부대찌개: '17000원',
      볶음밥: '8000원',
    },
    account: '신한 110562502990 오대희',
    snsLink: 'https://www.instagram.com/16th_military_wave/'
  },
  {//소웨
    id: 26,
    boothNumber: 26,
    boothName: '',
    major: '',
    intro: 'test',
    menu: {
      어묵세꼬치: '-원',
      오돌뼈주먹밥세트: '-원',
      어묵우동: '-원',
      황도: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_software/'
  },
  {//도공
    id: 27,
    boothNumber: 27,
    boothName: '도시공학과',
    major: 'Urban Planning & Engineering',
    intro: 'test',
    menu: {
      감튀세트: '-원',
      마른오징어: '-원',
      황도: '-원',
      커피땅콩: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_urban/'
  },
  {//물공
    id: 28,
    boothNumber: 28,
    boothName: '물류시스템공학과',
    major: 'Logistics System Engineering',
    intro: 'test',
    menu: {
      순두부열라면: '-원',
      치즈김치볶음밥: '-원',
      삼겹살꼬치: '-원',
      감자전: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_logistics/'
  },
  {//나화생
    id: 29,
    boothNumber: 29,
    boothName: '나노화학생명공학과',
    major: 'Nano-Chemical & Environmental Engineering',
    intro: 'test',
    menu: {
      짜계치: '-원',
      떡라면: '-원',
      스계후: '-원',
      묵사발: '-원',
    },
  },
];
