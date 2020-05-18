<a href="https://github.com/jhlee225/studyDevRepo">뒤로가기</a>

## Red Black Tree

- BST 를 기반으로하는 트리 형식의 자료구조
- Search, Insert, Delete 에 O(log n)의 시간 복잡도가 소요
- 동일한 노드의 개수일 때, depth 를 최소화하여 시간 복잡도를 줄임 
- 동일한 노드의 개수일 때, depth 가 최소가 되는 경우는 tree 가 complete binary tree 인 경우

### Red-Black Tree 성질

- 각 노드는 Red or Black이라는 색깔을 갖는다.
- Root node 의 색깔은 Black이다.
- 각 leaf node 는 black이다.
- 어떤 노드의 색깔이 red라면 두 개의 children 의 색깔은 모두 black 이다.
- 각 노드에 대해서 노드로부터 descendant leaves 까지의 단순 경로는 모두 같은 수의 black nodes 들을 포함하고 있다. 

  (Black-Height:  노드 x 로부터 노드 x 를 포함하지 않은 leaf node 까지의 simple path 상에 있는 black nodes 들의 개수)

- Binary Search Tree 이므로 BST 의 특징을 모두 갖는다.
- Root node 부터 leaf node 까지의 모든 경로 중 최소 경로와 최대 경로의 크기 비율은 2 보다 크지 않다. => balanced 상태
- 노드의 child 가 없을 경우 child 를 가리키는 포인터는 NIL 값을 저장한다. => NIL들을 leaf node 로 간주

### Red-Black Tree 의 삽입과 삭제

### `삽입`

우선 BST 의 특성을 유지하면서 노드를 삽입을 한다. 그리고 삽입된 노드의 색깔을 RED 로 지정한다. 

(Red 로 지정하는 이유? Black-Height 변경 최소화 위함)

삽입 결과 RBT 의 특성 위배(violation)시 노드의 색깔을 조정하고, Black-Height 가 위배되었다면 rotation 을 통해 height 를 조정

=> RBT 의 동일한 height 에 존재하는 internal node 들의 Black-height 가 같아지게 되고 최소 경로와 최대 경로의 크기 비율이 2 미만으로 유지된다.

### `삭제`

삭제도 삽입과 마찬가지로 BST 의 특성을 유지하면서 해당 노드를 삭제한다. 

삭제될 노드의 child 의 개수에 따라 rotation 방법이 달라지게 된다. 

삭제 노드 색깔 Black? Black-Height 1 감소한 경로에 black node 1 개 추가 rotation 후 노드 색깔 조정

삭제 노드 색깔 Red? Violation 이 발생하지 않으므로 RBT 가 그대로 유지된다. 

### Red-Black Tree의 사용

Java Collection 에서 ArrayList 도 내부적으로 RBT 로 이루어져 있고, 

HashMap 에서의 Separate Chaining에서도 사용된다. 