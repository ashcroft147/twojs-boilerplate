## Graphic
 1. 조업구분 별로 Rectangle 색상 지정 (H)
 2. 상하Turn 발생 이벤트 발생시  Left / Right 표현 및 상하의 표현을 더욱 직관적으로 개선 (H)
    - 상/하 : Rectangle의 background design pattern 으로 구현
    - Left / Right : Rectangle의 Edge에 작은 Rectangle을 추가하여 Left / Right 표현
 3. main_info, thk_info 의 Rectangle 을 그리는 method를 작성한다. (H)
    - main_info 영역의 Rectangle에는 Edge에 Left / Right 구분을 위한 Edge Rectangle을 그린다. 
    - 기준재료 기준으로 Left는 Blue, Right는 Red Color를 사용하고, Stroke의 두께는 Thick하게 그린다. 
    - Edge Rectangle는 정사각형이며 길이는 폭길이의 ~~~ 배율로 지정한다.

## Animation

## Container

9. Container에 포함된 button에 대해서 tooltip 기능을 제공하여 button의 기능을 설명한다. (H)
10. 기준재료를 각 Container에 포함된 image별로 Layer해서 볼 수 있는 기능을 제공하며, (H)
    - 전체 Container에 대해서 동시에 On/Off 기능(버튼) 제공
11. Container 의 구조를 그리는 html / css 를 작성한다. (H)
13. Container 각 객체의 Event Listener를 구현(Animation, 확대, 축소, 기준재료 조회, 두께/폭 화면 (H)
14. 11) ~13) 의 기능을 포함하는 Javascript Plugin을 개발한다. 

1. 이벤트 발생일시 별로 오름차순 / 내림차순 기능 구현시, 최초 조회 이후 정렬 순서 변경시에는 Client에서 처리 (H)
    -  순서 변경만 필요한데, 서버에서 쿼리 실행부터 화면 Rendering을 재실행 하는 것은 불필요
2. Rectangle이 Rendering 될때 Anmation 효과 추가 (L)
3. 기준재료를 표현하는 기능 혹은 Design 구현 (H)
    - 개선화면의 factory_info 영역의 색상으로 구별
5. 각 발생 이벤트에 대한 Motion을 Animation으로 구현하고, Default로 재생이 안되고, btngroup에서 재생버튼 Click시 Animation
    실행 (L)
    - 각 이벤트별 Animation은 어떻게 동작하는지 ?
    - 재생 icon은 ▶, 멈춤 icon은 || 을 사용
6. 조업구분 단위 재료의 색상 구분 (M)
    - title <div>의 색상 ? or Rectangle의 색상 ?
    - 열연 : orange, 냉연 : sky, 전강 : purple 계통 . STS : silver . 후판 : yellow . 선재 : ... 
7. Client 화면에서 재료변경이벤트정보를 담는 Container 객체의 생성은 Javascript Class 로 구현 (H)
8. mtl_chg_event_info_container <div> mouse click시 shadow css 를 지정 (M)
    - 사용자가 관심을 갖는 <div> 구별
    - <div> 외곽의 left / bottom line에 shadow 생성

