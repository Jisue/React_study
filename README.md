# React_study

### 2021-02-23
- components
    - react의 엘리먼트를 나타남
    - 합성 가능
    - 여러개로 추출하면 좋음
- props
    - 읽기 전용
    - 순수 함수처럼 동작해야 함
- State & Lifecycle
- JSX 표현식
    - true && expression은 항상 expression으로 평가 
    - false && expression은 항상 false로 평가

- 제어 컴포넌트
    - 폼 엘리먼트가 사용자 입력을 기반으로 state를 관리, 업뎃


### 리액트 훅

1. UseState
- 가장 기본적인 Hook
- 함수형 컴포넌트에서도 가변적인 상태를 지니고 있음

2. UseEffect
- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행시킴
- 클래스형 컴포넌트의 componentDidMount + componentDidUpdate

3. useContext

4. userReducer
- useState보다 컴포넌트에서 더 다양한 상황에 따라 상태를 업뎃해줌

5. useMemo
- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화

6. useCallback
- 렌더링 최적화
- 이벤트 핸들러 함수를 필요할 때만 생성 가능

7. useRef
- 함수형 컴포넌트에서 ref를 쉽게 사용