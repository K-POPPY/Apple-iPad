[![vercel배포](https://img.shields.io/badge/Vercel-000000?style=plastic&logo=Vercel&logoColor=white)](https://vercel.com/k-poppy/apple-ipad)
# Apple iPad 10.2 (KR) _ Clone Coding

[![iPadLogo](https://apple-ipad-azure.vercel.app/images/hero_ipad_text.png)](https://apple-ipad-azure.vercel.app/)
[![AppleLogo](https://apple-ipad-azure.vercel.app/images/environment_icon.png)](https://apple-ipad-azure.vercel.app/) 

<a href="https://apple-ipad-azure.vercel.app/">Main Page</a> 

- PC, 태블릿, 모바일 반응형
- 웹표준과 웹접근성을 준수 / 시멘틱마크업 & BEM 네이밍규칙 사용
- 검색아이콘 클릭시 검색바 노출과 헤더 메뉴 사라지는 애니매이션 구현, 검색바 빠져나가면 검색바에 타이핑 했던 텍스트 초기화
- 장바구니 아이콘 토글, `event.stopPropagation()`을 사용해 클릭하면 닫히는 이벤트버블링을 장바구니 아이콘과 장바구니메뉴리스트 영역에서 멈춰 장바구니메뉴리스트를 제외하고 뷰포트 모든 영역 클릭시 장바구니메뉴리스트 닫힐수있게 구현
- CSS변수로 자주사용되고 공통되는 속성값 지정후 사용
- 페이지에서 반복적으로 사용되는 `figure`영역 공통css 지정해 반복 사용
- 스프라이트 이미지와 `CSS @keyframes`으로 `info`의 `icon` 애니메이션 구현
- `new IntersectionObserver()`를 사용하여 각 섹션의 `info`영역이 화면에 들어오면 나타나는 효과 구현 
- '촬영에서 편집 공유까지 한 기기에서.' 영역의 `video`를 CSS `mask-image`로 마스크및 html 속성으로 제어, 스크립트로 재생/일시정지 버튼 제어
- '당신에게 맞는 iPad는?' 영역 상품이미지, 컬러, 정보, 가격등을 `ipads.js`의 데이터를 기반으로 `javascript`로 화면 노출
- 각주 삽입해 클릭시 footer의 주의사항으로 이동
- footer navigation 영역 텍스트와 url을 `navigations.js`의 데이터를 기반으로 `javascript`로 화면 노출