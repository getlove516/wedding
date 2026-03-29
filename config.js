/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  bride: {
    name: "이나리",
    father: "최미란",
    mother: "이광구",
    fatherDeceased: false,
    motherDeceased: false
  },

  groom: {
    name: "김정현",
    father: "최영숙",
    mother: "김백년",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-05-16",
    time: "12:00",
    venue: "안양대학교 강화캠퍼스",
    address: "인천 강화군 불은면 중앙로 602-14",
    mapLinks: {
      kakao: "https://kko.to/rwS51YaF_y",
      naver: "https://naver.me/Gy3wZQur"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "총총총총, 성큼성큼\n각자의 보폭으로 걷던 두 사람이 만나\n이제는 서로 발맞추어\n재밌고 활기차게 걸어가 보려 합니다.\n\n저희의 첫걸음에\n소중한 당신을 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "김정현", bank: "신한은행", number: "110-219-612070" },
      { role: "어머니", bank: "국민은행", number: "645501-01-358584" },
      { role: "아버지", bank: "정현은행", number: "사랑합니다🎉" }
    ],
    bride: [
      { role: "이나리", bank: "카카오뱅크", number: "3333-04-8061061" },
      { role: "어머니", bank: "농협은행", number: "588-02-021813" },
      { role: "아버지", bank: "나리은행", number: "사랑합니다🎉" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이나리 ♥ 김정현 결혼합니다",
    description: "2026년 5월 16일, 소중한 분들을 초대합니다."
  }
};
