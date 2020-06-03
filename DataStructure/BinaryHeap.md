<a href="https://github.com/jhlee225/studyDevRepo">뒤로가기</a>

## Binary Heap

배열기반의 Complete Binary Tree 의 형식

배열에 트리의 값들을 넣어줄 때, 0 번째는 건너뛰고 1 번 index 부터 루트노드가 시작

노드의 고유번호 값과 배열의 index 를 일치시켜 혼동을 줄임

### `Max/Min Heap`

각 노드의 값이 해당 children 의 값보다 크거나 같은 complete binary tree
(Min Heap 은 반대)

- Root node 에 있는 값이 제일 크다.

  => 최대값 검색 연산 복잡도 O(1).
  (Min Heap 은 최소값 검색연산 복잡도 O(1))

- 배열을 사용하여 효율적으로 관리 가능

  => random access 가 가능.

- Root node 제거 시 맨 마지막 노드를 루트 노드로 대체하고, 다시 heapify 하여 heap 구조 유지

  => 이런 경우에는 결국 O(log n)의 시간복잡도로 최대값 / 최소값에 접근할 수 있게 된다.
