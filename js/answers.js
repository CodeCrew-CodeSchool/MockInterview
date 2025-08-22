
const questions = {
  GENERAL: {
    1: "How would you approach making a website responsive for both desktop and mobile devices?",
    2: "What tools or techniques do you use for testing your code?",
    3: "How would you ensure cross-browser compatibility when developing a website?",
    4: "If you were to build a simple website for a small business, what steps would you take from start to finish?",
    5: "Describe a situation where you had to troubleshoot a difficult bug in your code. How did you solve it?",
    6: "Which software development methodologies are you familiar with (e.g., Agile, Waterfall)?",
    7: "How would you ensure cross-browser compatibility when developing a website?",
    8: "What is JSON? Why and where do you use it? Describe what JSON looks like to an 8th grader.",
    9: "What are the Four Pillars of OOP?",
    10: "What is the difference between a class and an object?",
    11: "What is the difference between a while loop and a do-while loop?",
    12: "What does it mean for an API to be RESTful?",
    13: "What is Source Control and why is it important?",
    14: "What does CI (Continuous Improvement) mean?",
    15: "What is the difference between Unit testing and Integration testing?",
    16: "What is the HTTP protocol?",
    17: "What is CRUD? How is it related to routes? Name 4 request types that make CRUD operations.",
    18: "What are RESTful APIs?",
    19: "What is the difference between SQL and NOSQL?",
    20: "What search algorithm will be more useful for a sorted array? Why?",
    21: "What is Agile software development?",
    22: "What are some common traits of agile development?",
    23: "What are Sprints?",
    24: "Can you name any agile development models?",
    25: "Tell me about React and what it is for.",
    26: "How would you run a web application that has its frontend and backend on different repositories?"
  },
  GIT: {
    27: "What is version control, and why is it useful?",
    28: "How would you resolve a merge conflict in GIT?",
    29: "What is a pull request?",
    30: "What is a branch?",
    31: "What is a fork?",
    32: "Describe the steps to clone a repository and submit a pull request.",
    33: "What is the purpose of a .gitignore file?",
    34: "How would you revert a commit that has already been pushed and shared with others?",
    35: "What is a .ENV file? What could happen if it is not included in the .gitignore?"
  },
  HTML: {
    36: "What is the semantic meaning of the article, aside, and nav elements?",
    37: "What is a self-closing tag? Provide an example.",
    38: "Explain the difference between block and inline display values.",
    39: "When will you use an 'a' instead of a 'button'?",
    40: "How would you ensure that a website is accessible to all users?",
    41: "What is the difference between HTML5 and its predecessors?",
    42: "How would you optimize images for better page loading without compromising quality?",
    43: "Is HTML a programming language?",
    44: "[Placeholder]"
  },
  CSS: {
    45: "Describe the “box model” in CSS.",
    46: "What are CSS preprocessors, and why might you use one?",
    47: "Explain the difference between a class selector and an ID selector.",
    48: "How can you achieve a responsive design without using any frameworks?",
    49: "What is the difference between relative, absolute, fixed, and sticky positioning?",
    50: "What is tailwind?",
    51: "Name an alternative to CSS for designing a webpage.",
    52: "Is CSS a programming language?",
    53: "Describe your thought process in how you would go about centering an element relative to its parent element?",
    54: "[Placeholder]"
  },
  JavaScript: {
    55: "Explain the difference between let, const, and var.",
    56: "How does event propagation work in JavaScript? What are event bubbling and capturing?",
    57: "Describe the difference between synchronous and asynchronous operations in JavaScript.",
    58: "What is this keyword, and how does it work in JavaScript?",
    59: "Can you explain what promises are and provide an example of how they might be used?",
    60: "What does i++ mean in JavaScript?",
    61: "What does ++i mean in JavaScript?",
    62: "[Placeholder]"
  },
  Python: {
    63: "What is indentation in Python?",
    64: "What is FastAPI? What is special about it?",
    65: "Name one major advantage and one major disadvantage of using Python.",
    66: "What is a Python environment?",
    67: "What does the “self.” mean in object-oriented programming in Python?",
    68: "What is a Python Environment, and why is it useful? In which cases?"
  },
  "AI Development and Theory": {
    69: "What is a neural network?",
    70: "Name a classification model and a situation where you will use it.",
    71: "Name a regression model and a situation where you will use it.",
    72: "What is reinforcement learning?",
    73: "What are recommendation systems? What are its two main kinds of filtering?",
    74: "Name an approach to evaluate the model performance. How does this work?",
    75: "Explain Cross-Validation and train/test split approaches. For which cases is one better than the other?",
    76: "Explain BackPropagation.",
    77: "Name a prompting technique and provide a usage example.",
    78: "What are pipelines for model development? Why are they important?",
    79: "What is the difference between classical machine learning and deep learning?",
    80: "What is the difference between supervised learning and unsupervised learning? Provide examples for each.",
    81: "What is the difference between Breadth-First Search and Depth-First Search?",
    82: "What is the difference between an informed search and an uninformed search? Provide an example for each.",
    83: "Name an informed search algorithm and explain it.",
    84: "What is a tree data structure? Name its part and a type of tree.",
    85: "What is a graph? Name its parts.",
    86: "Explain the binary search algorithm. What is its time complexity?",
    87: "What is Natural Language Processing? How does it work? Name a library you find useful for doing this process.",
    88: "What is RAG? How does it work?",
    89: "What is a Transformer? How does it work?",
    90: "What is Fine-Tuning? How does it work? Provide examples.",
    91: "What is Sentiment Analysis? Name a library and explain how you will use it."
  },
  ARRAYS: {
    92: "Find the Missing Number: Given an array containing n distinct numbers taken from 0 to n, find the one that is missing.",
    93: "Median of Two Sorted Arrays: Given two sorted arrays, find the median element when the arrays are merged.",
    94: "Largest Subarray with Zero Sum: Find the length of the largest subarray with a sum of zero in a given array.",
    95: "Maximum Product Subarray: Find the contiguous subarray within an array that has the largest product."
  },
  LINKEDLIST: {
    96: "Reverse a LinkedList: Reverse a singly linked list in-place.",
    97: "Detect a Cycle: Determine if a linked list has a loop.",
    98: "Find Middle Node: Return the middle node of a linked list.",
    99: "Merge Two Sorted Lists: Merge two sorted linked lists into one sorted list.",
    100: "Remove Duplicates: Remove duplicate elements from a sorted linked list."
  },
  "DOUBLE LINKEDLIST": {
    101: "Reverse a Doubly Linked List: Reverse a doubly linked list in-place.",
    102: "Delete a Given Node: Delete a node from a doubly linked list in O(1) time.",
    103: "Insert Before a Node: Insert a new node before a given node.",
    104: "Check Palindrome: Check if the list reads the same forward and backward.",
    105: "Detect a Cycle: Determine if the doubly linked list has a loop."
  },
  STACK: {
    106: "Implement Stack: Implement a stack using an array or list.",
    107: "Min Stack: Design a stack that supports retrieving the minimum element in constant time.",
    108: "Evaluate Postfix: Evaluate a postfix (Reverse Polish) expression using a stack.",
    109: "Undo Operation: Simulate an undo operation using a stack."
  },
  HASH: {
    110: "First Non-Repeating Char: Find the first non-repeating character in a string.",
    111: "Frequency Count: Count the frequency of each element in an array.",
    112: "Group Anagrams: Group strings that are anagrams of each other.",
    113: "Check Isomorphic Strings: Determine if two strings follow the same pattern."
  },
  QUEUE: {
    114: "Reverse First K Elements: Reverse the first k elements of a queue while keeping the remaining elements in order.",
    115: "Generate Binary Numbers: Generate binary numbers from 1 to n using a queue.",
    116: "Recent Calls Counter: Return the number of calls made in the past 3000 milliseconds."
  },
  PRIORITYQUEUE: {
    117: "Kth Largest Element: Return the kth largest element in an array using a priority queue.",
    118: "Find Smallest Element: Insert numbers into a priority queue and return the smallest element.",
    119: "Sort Array: Use a priority queue to return the elements of an array in ascending order."
  },
  BINARYSEARCHTREE: {
    120: "Search in BST: Given a value, determine if it exists in the binary search tree.",
    121: "Insert into BST: Insert a value into the binary search tree while maintaining BST properties.",
    122: "Find Minimum Value: Return the smallest value in the binary search tree.",
    123: "Find Maximum Value: Return the biggest value in the binary search tree."
  },
  DIJKSTRA: {
    124: "Path Image Question 1: Difficulty Easy",
    125: "Path Image Question 2: Difficulty Medium",
    126: "Path Image Question 3: Difficulty Hard"
  },

  "SYSTEM DESIGN": {
    127: "Parking Lot Design: Design a parking lot management system.",
    128: "Chat Application Design: Design a simple chat application (server, clients, messages, etc.).",
    129: "Design a Booking System: Design a reservation and booking system for a hotel or airline.",
    130: "Design an Online Food Ordering System: Design a system for online food ordering and delivery.",
    131: "Design a Distributed Messaging System: Design a distributed messaging platform like WhatsApp or Slack.",
    132: "Design a Content Recommendation System: Design a system that recommends content to users based on their preferences and behavior.",
    133: "Design a Web Browser Cleaner: Design a system that can clean the most recent history or cookies of a user.",
    134: "Design a System to Navigate Web History: Design a system to go forward and backward through user history.",
    135: "Design a storage system for receipts: Design an efficient storage system only for keeping receipts.",
    136: "Design a City Navigation Service: Compute fastest driving routes with live traffic and road closures.",
    137: "Design a Public Transit Trip Planner: Find optimal routes across buses and trains with transfer penalties.",
    138: "Design an Emergency Response Dispatcher: Assign the nearest available unit (ambulance/fire) to an incident.",
    139: "Design a Warehouse Robot Path Planner: Plan shortest-time paths for robots while avoiding collisions.",
    140: "Design an Indoor Campus Navigator: Route users across buildings/floors with accessibility constraints.",
    141: "Design a CDN Request Router: Select the lowest-latency servers/routes across a global network to clients.",
    142: "Design a Deadline-Aware Job Scheduler: Run tasks based on urgency and deadlines with preemption.",
    143: "Design a Customer Support Triage System: Auto-prioritize tickets by severity, SLA, or VIP status.",
    144: "Design a Real-Time Leaderboard Service: Maintain top-K scores with fast updates and queries."
  }

};

const answers = {
  GENERAL: {
    1: "Use media queries and flexible grids (like Bootstrap or CSS Flexbox/Grid) to adjust layout depending on screen size.",
    2: "Use unit testing (Jest, PyTest), integration tests, browser dev tools, and linters like ESLint or Prettier.",
    3: "Use CSS resets, test on multiple browsers, and use feature detection.",
    4: "Plan layout, design UI/UX, choose tech stack, set up repo, develop frontend/backend, test, deploy.",
    5: "Used console.log and debugger to trace an async bug in a React app, fixed by restructuring useEffect logic.",
    6: "Agile (Scrum/Kanban), Waterfall, and Hybrid. Prefer Agile for flexibility and feedback loops.",
    7: "Normalize CSS styles, test across browsers, and use consistent layout techniques like Flexbox.",
    8: "JSON is a data format using key-value pairs. It looks like a dictionary. Example: {name:StudentName}.",
    9: "The four pillars are:<br>- <strong>Abstraction</strong>: Hiding complex details and showing only the essential features.<br>- <strong>Encapsulation</strong>: Bundling data and methods that work on that data within one unit (like a class), and restricting direct access to some parts.<br>- <strong>Inheritance</strong>: A way to create a new class from an existing class, reusing its properties and methods.<br>- <strong>Polymorphism</strong>: The ability to use a method in different ways depending on the object calling it.",
    10: "A class is a blueprint; an object is an instance of that class.",
    11: "`while` checks before looping, `do-while` checks after one execution.",
    12: "A RESTful API follows standard HTTP methods (GET, POST, PUT, DELETE) and stateless communication.",
    13: "Tracks changes in code; important for collaboration and rollback.",
    14: "Constantly improving systems and workflows over time.",
    15: "Unit tests test individual parts or functions. Integration tests check how parts work together.",
    16: "Hypertext Transfer Protocol is the foundation of web communication.",
    17: "CRUD: Create, Read, Update, Delete. Related to routes: POST, GET, PUT, DELETE.",
    18: "APIs following REST principles: stateless, uses HTTP methods, and resources have URIs.",
    19: "SQL is relational and structured. NoSQL is non-relational, flexible, and good for unstructured data.",
    20: "Binary search — because it splits sorted data in half every iteration.",
    21: "Agile emphasizes iterative development, customer feedback, and flexibility.",
    22: "Short cycles, standups, sprints, constant iteration, and feedback.",
    23: "Sprints are fixed-length iterations in Agile to deliver increments.",
    24: "Scrum, Kanban, Extreme Programming (XP).",
    25: "React is a frontend JavaScript library for building interactive UIs with components.",
    26: "Use CORS for cross-origin access, deploy frontend (e.g., GitHub Pages), backend on Render or Heroku, then link."
  },
  GIT: {
    27: "Tracks code changes and supports collaboration across teams.",
    28: "Fetch latest code, resolve manually using a merge tool or code editor, then commit resolved version.",
    29: "Request to merge changes from one branch to another, often with review.",
    30: "A branch is a separate line of development from the main codebase.",
    31: "A fork is a personal copy of someone else's repository.",
    32: "1. Clone: `git clone URL` <br> 2. Do Some Code <br> 3. Add Changes <br> 4. Commit Changes  5. Push <br> 6. Open PR on GitHub",
    33: "Specifies which files/folders Git should ignore (e.g., node_modules, .env).",
    34: "Use `git revert (commit ID)` or `git reset` followed by a force push.",
    35: ".ENV stores secrets. If not ignored, secrets may be exposed publicly."
  },
  HTML: {
    36: "article = self-contained content <br> aside = side info <br> nav = navigation.",
    37: "A tag that does not need closing",
    38: "Block = full width (e.g., `div`) <br> Inline = inside text flow (e.g., `span`).",
    39: "1. <b>a</b> : For links/navigation <br> 2. <b>button</b> : For actions like submitting forms.",
    40: "Use semantic HTML, alt text, ARIA roles, and/or ensure keyboard navigation.",
    41: "HTML5 supports video, audio, new tags (e.g., `section`), better semantics.",
    42: "Use compressed formats (WebP), lazy loading, and appropriate sizing.",
    43: "No, HTML is a markup language, not a programming language.",
    44: "Place Holder"
  },
  CSS: {
    45: "Content + Padding + Border + Margin define an elements layout box.",
    46: "Tools like SASS/LESS that allow variables, mixins, and nesting for better CSS organization.",
    47: "Class selectors (`.btn`) can apply multiple times; ID selectors (`#main`) must be unique.",
    48: "Use media queries, percentages, rem/em units, and CSS Grid/Flexbox.",
    49: "Relative = based on parent <br>Absolute = based on nearest relative parent <br>Fixed = viewport <br> Sticky = scroll-aware.",
    50: "Tailwind is a utility-first CSS framework with pre-defined classes for styling.",
    51: "Styled Components, Emotion (CSS-in-JS), or frameworks like Bootstrap.",
    52: "No, CSS is a stylesheet language.",
    53: "Use `display: flex; justify-content: center; align-items: center;` on the parent.",
    54: "Place Holder"
  },
  JavaScript: {
    55: "`let` = block-scoped, mutable <br> `const` = block-scoped, immutable <br> `var` = function-scoped, older.",
    56: "Bubbling = inner to outer <br> Capturing = outer to inner. <br> Use `addEventListener` with capture flag.",
    57: "Synchronous runs line by line; Asynchronous uses callbacks, promises, or async/await.",
    58: "`this` refers to the context where the function is called (object, global, etc.).",
    59: "Promises handle async operations. Example: `fetch().then().catch()`.",
    60: "`i++` increments after the current operation.",
    61: "`++i` increments before the current operation.",
    62: "Place Holder"
  },
  Python: {
    63: "Python uses indentation (whitespace) to define blocks of code instead of braces.",
    64: "FastAPI is a high-performance web framework for APIs, supports async and auto-docs.",
    65: "Advantage: Easy to read and use. Disadvantage: Slower than compiled languages.",
    66: "A Python environment is an isolated setup (like venv) for managing dependencies.",
    67: "`self` refers to the instance of the class used to access attributes and methods.",
    68: "Useful to avoid package/version conflicts, especially in multi-project setups."
  },
  "AI Development and Theory": {
    69: "A neural network is a layered model mimicking how the brain processes input.",
    70: "Some classification models include Logistic Regression, KNN, SVM, Naive Bayes, and Random Forest. Used for classifying data — e.g., spam detection or sentiment classification.",
    71: "Regression models like Linear or Polynomial Regression are used for prediction problems — e.g., predicting housing prices based on square footage.",
    72: "Learning by trial and error using rewards or penalties. Used in game AI, robotics, and dynamic environments.",
    73: "Recommendation systems suggest items to users. Two types: Collaborative filtering (based on user behavior) and Content-based filtering (based on item features).",
    74: "Accuracy, Precision, Recall, F1-score, and Confusion Matrix are commonly used. These evaluate how well the model classifies or predicts based on true/false positives and negatives.",
    75: "Train/Test split separates a portion (e.g., 80/20) of data for testing, good for large datasets. Cross-validation divides data into folds and cycles through training/testing — better for small datasets or reducing variance.",
    76: "BackPropagation is an algorithm used to update weights in a neural network by computing the gradient of the loss function and propagating the error backward through the layers.",
    77: "One prompting technique is Chain-of-Thought prompting — ask the model to show reasoning step-by-step. Example: 'Explain why X before giving the answer.'",
    78: "Pipelines combine preprocessing, feature engineering, model training, and evaluation into one reusable flow. Helps reproducibility and reduces errors in production.",
    79: "Classical ML uses features defined by humans and includes algorithms like SVM, Decision Trees. Deep Learning uses multi-layered neural nets to learn features automatically — e.g., image classification with CNNs.",
    80: "Supervised learning uses labeled data (e.g., image + label), like classification and regression. Unsupervised learning uses unlabeled data to find patterns — e.g., clustering customer behavior.",
    81: "BFS explores all neighbors first (queue-based), DFS goes deep before backtracking (stack/recursion). BFS finds shortest path in unweighted graphs.",
    82: "Uninformed search (e.g., BFS, DFS) uses no knowledge of goal location. Informed search (e.g., A*) uses heuristics to guide search efficiently.",
    83: "A* Search is an informed search that uses g(n) (cost so far) + h(n) (estimated cost to goal) to pick the best path.",
    84: "A tree has nodes and edges. Each node can have children. Common parts: root, leaf, child, parent. Example: Binary Search Tree.",
    85: "A graph is a collection of nodes (vertices) and connections (edges). It can be directed/undirected and weighted/unweighted.",
    86: "Binary Search finds a value in a sorted array by dividing the search space in half. Time complexity is O(log n).",
    87: "NLP processes human language for tasks like translation, summarization, sentiment analysis. Libraries include spaCy, NLTK, and HuggingFace Transformers.",
    88: "RAG (Retrieval-Augmented Generation) combines information retrieval (like search) with generation from a language model. It fetches relevant documents before answering.",
    89: "Transformers use self-attention mechanisms to understand token relationships. They power models like BERT and GPT.",
    90: "Fine-Tuning means training a pre-trained model on new, specific data. Example: Fine-tune GPT on legal documents to specialize it in law.",
    91: "Sentiment Analysis detects emotion or opinion in text (positive/negative/neutral). Use libraries like TextBlob, Vader, or HuggingFace transformers to analyze review polarity."
  },
  ARRAYS: {
    92: "<b>Logic:</b><br>Mark presence using a boolean array and scan 0..n for the first missing index:<br>- Create an array <code>present</code> of size <code>n+1</code> filled with <code>false</code>.<br>- Mark <code>present[x] = true</code> for each value <code>x</code> in <code>nums</code>.<br>- The first index still <code>false</code> is the missing number.<br>- Time O(n), Space O(n).<br><br><strong>Example:</strong><br>```js<br>function missingNumber(nums) {<br> const n = nums.length;<br> const present = new Array(n + 1).fill(false);<br> for (let i = 0; i < n; i++) {<br> present[nums[i]] = true;<br> }<br> for (let i = 0; i <= n; i++) {<br> if (!present[i]) return i;<br> }<br> return -1;<br>}<br>```",
    93: "<b>Logic:</b><br>Compute the median of two sorted arrays with two pointers (no full merge):<br>- Use pointers <code>i</code> and <code>j</code> to traverse <code>a</code> and <code>b</code>.<br>- Advance until you have consumed half of all elements, tracking the last two seen values.<br>- If total length is odd, answer is the current value; if even, average the last two.<br>- Time O(m+n), Space O(1).<br><br><strong>Example:</strong><br>```js<br>function findMedianSortedArrays(a, b) {<br> const m = a.length, n = b.length;<br> const total = m + n;<br> const mid = Math.floor(total / 2);<br> let i = 0, j = 0, count = 0;<br> let prev = 0, curr = 0;<br> while (count <= mid) {<br> prev = curr;<br> if (i < m && (j >= n || a[i] <= b[j])) {<br> curr = a[i++];<br> } else {<br> curr = b[j++];<br> }<br> count++;<br> }<br> return (total % 2 === 1) ? curr : (prev + curr) / 2;<br>}<br>```",
    94: "<b>Logic:</b><br>Find the longest contiguous subarray of zeros by counting runs:<br>- Walk the array keeping a <code>currentCount</code> of consecutive zeros.<br>- On zero: increment and update <code>maxCount</code>.<br>- On non-zero: reset <code>currentCount</code> to 0.<br><br><strong>Example:</strong><br>```js<br>let currentCount = 0;<br>let maxCount = 0;<br>for (let i = 0; i < arr.length; i++) {<br> if (arr[i] === 0) {<br> currentCount++;<br> maxCount = Math.max(maxCount, currentCount);<br> } else {<br> currentCount = 0;<br> }<br>}<br>return maxCount;<br>```",
    95: "<b>Logic:</b><br>Max product subarray (all numbers positive & non-zero):<br>- Track a running product <code>currProd</code> and global best <code>maxProd</code>.<br>- Each step: either extend the current product or start fresh at the current number.<br>- Time O(n), Space O(1).<br><br><strong>Example:</strong><br>```js<br>let maxProd = nums[0];<br>let currProd = nums[0];<br>for (let i = 1; i < nums.length; i++) {<br> const num = nums[i];<br> currProd = Math.max(num, currProd * num);<br> maxProd = Math.max(maxProd, currProd);<br>}<br>return maxProd;<br>```"
  },
  LINKEDLIST: {
    96: "<b>Logic:</b><br>Reverse a singly linked list using three pointers:<br>- Set <code>prev = null</code> and <code>current = head</code>.<br>- For each node, store <code>current.next</code>, then reverse the pointer to <code>prev</code>.<br>- Move <code>prev</code> and <code>current</code> forward until the end.<br>- Set head to <code>prev</code>.<br><br><strong>Example:</strong><br>```js<br>function reverseList(head) {<br> let prev = null;               // Start with empty reversed part<br> let current = head;            // Start from head<br> while (current) {<br>   let next = current.next;     // Save next node<br>   current.next = prev;         // Reverse the link<br>   prev = current;              // Move prev forward<br>   current = next;              // Move current forward<br> }<br> return prev;                   // New head of reversed list<br>}<br>```",
    97: "<b>Logic:</b><br>Detect a loop in a linked list using two pointers:<br>- Use Floyds Cycle Detection (Tortoise and Hare).<br>- Move <code>slow</code> one step, <code>fast</code> two steps.<br>- If <code>fast === slow</code> at any point, a cycle exists.<br>- If fast reaches null, no cycle.<br><br><strong>Example:</strong><br>```js<br>function hasCycle(head) {<br> let slow = head, fast = head;      // Start both at head<br> while (fast && fast.next) {<br>   slow = slow.next;                // Move 1 step<br>   fast = fast.next.next;           // Move 2 steps<br>   if (slow === fast) return true;  // Found a cycle<br> }<br> return false;                      // No cycle<br>}<br>```",
    98: "<b>Logic:</b><br>Return the middle node of a linked list:<br>- Use two pointers: <code>slow</code> and <code>fast</code>.<br>- Move <code>fast</code> 2 steps and <code>slow</code> 1 step.<br>- When <code>fast</code> reaches the end, <code>slow</code> will be in the middle.<br><br><strong>Example:</strong><br>```js<br>function findMiddle(head) {<br> let slow = head, fast = head;        // Both start at head<br> while (fast && fast.next) {<br>   slow = slow.next;                  // 1 step<br>   fast = fast.next.next;             // 2 steps<br> }<br> return slow;                         // Middle node<br>}<br>```",
    99: "<b>Logic:</b><br>Merge two sorted linked lists:<br>- Use two pointers <code>p1</code> and <code>p2</code>.<br>- Compare values and attach smaller node to a dummy list.<br>- Append remaining nodes when one list is exhausted.<br><br><strong>Example:</strong><br>```js<br>function mergeSorted(l1, l2) {<br> let dummy = new Node(0);            // Dummy starter node<br> let current = dummy;                // Pointer for result list<br> while (l1 && l2) {<br>   if (l1.value < l2.value) {<br>     current.next = l1;              // Attach l1 node<br>     l1 = l1.next;<br>   } else {<br>     current.next = l2;              // Attach l2 node<br>     l2 = l2.next;<br>   }<br>   current = current.next;          // Move pointer<br> }<br> current.next = l1 || l2;           // Append leftovers<br> return dummy.next;                 // Skip dummy and return result<br>}<br>```",
    100: "<b>Logic:</b><br>Remove duplicates from a sorted linked list:<br>- Traverse the list with a pointer.<br>- If <code>current.value === current.next.value</code>, skip <code>current.next</code>.<br>- Continue until end of list.<br><br><strong>Example:</strong><br>```js<br>function removeDuplicates(head) {<br> let current = head;                    // Start at head<br> while (current && current.next) {<br>   if (current.value === current.next.value) {<br>     current.next = current.next.next;  // Skip duplicate<br>   } else {<br>     current = current.next;            // Move forward<br>   }<br> }<br> return head;<br>}<br>```"
  },
  "DOUBLE LINKEDLIST": {
    101: "<b>Logic:</b><br>Reverse a doubly linked list in-place:<br>- Swap the <code>next</code> and <code>prev</code> pointers of each node.<br>- Update <code>head</code> and <code>tail</code> at the end.<br><br><strong>Example:</strong><br>```js<br>function reverseDLL(list) {<br>  let current = list.head;<br>  let temp = null;<br>  while (current) {<br>    // Swap next and prev<br>    temp = current.prev;<br>    current.prev = current.next;<br>    current.next = temp;<br>    // Move to next node (was prev)<br>    current = current.prev;<br>  }<br>  // Swap head and tail<br>  temp = list.head;<br>  list.head = list.tail;<br>  list.tail = temp;<br>}<br>```",
    102: "<b>Logic:</b><br>Delete a node in O(1) time from a doubly linked list:<br>- Rewire <code>prev</code> and <code>next</code> pointers around the node.<br>- Update <code>head</code> or <code>tail</code> if necessary.<br><br><strong>Example:</strong><br>```js<br>function deleteNodeO1(node, list) {<br>  if (node === list.head) {<br>    list.head = node.next;<br>    if (list.head) list.head.prev = null;<br>  }<br>  if (node === list.tail) {<br>    list.tail = node.prev;<br>    if (list.tail) list.tail.next = null;<br>  }<br>  if (node.prev) node.prev.next = node.next;<br>  if (node.next) node.next.prev = node.prev;<br>  node.next = null;<br>  node.prev = null;<br>}<br>```",
    103: "<b>Logic:</b><br>Insert a new node before a given node in a doubly linked list:<br>- Set <code>newNode.next</code> to the given node.<br>- Set <code>newNode.prev</code> to the node’s previous node.<br>- Update surrounding pointers.<br><br><strong>Example:</strong><br>```js<br>function insertBefore(target, newNode, list) {<br>  newNode.next = target;<br>  newNode.prev = target.prev;<br>  if (target.prev) {<br>    target.prev.next = newNode;<br>  } else {<br>    list.head = newNode;  // New head<br>  }<br>  target.prev = newNode;<br>}<br>```",
    104: "<b>Logic:</b><br>Check if a doubly linked list is a palindrome:<br>- Use two pointers from <code>head</code> and <code>tail</code>.<br>- Compare values while moving inward.<br><br><strong>Example:</strong><br>```js<br>function isPalindrome(head, tail) {<br>  let left = head;<br>  let right = tail;<br>  while (left !== right && left.prev !== right) {<br>    if (left.value !== right.value) return false;<br>    left = left.next;<br>    right = right.prev;<br>  }<br>  return true;<br>}<br>```",
    105: "<b>Logic:</b><br>Detect if a doubly linked list has a cycle:<br>- Use Floyds Tortoise and Hare algorithm.<br>- Move one pointer one step, the other two steps.<br>- If they meet, a cycle exists.<br><br><strong>Example:</strong><br>```js<br>function hasCycle(head) {<br>  let slow = head;<br>  let fast = head;<br>  while (fast && fast.next) {<br>    slow = slow.next;<br>    fast = fast.next.next;<br>    if (slow === fast) return true;<br>  }<br>  return false;<br>}<br>```"
  },
  STACK: {
    106: "<b>Logic:</b><br>Implement a stack using an array:<br>- Use <code>push</code> to add, <code>pop</code> to remove, and <code>peek</code> to view top.<br><br><strong>Example:</strong><br>```js<br>class Stack {<br>  constructor() {<br>    this.items = [];                // Internal array<br>  }<br>  push(value) {                    // Add to top<br>    this.items.push(value);<br>  }<br>  pop() {                          // Remove from top<br>    return this.items.pop();<br>  }<br>  peek() {                         // View top element<br>    return this.items[this.items.length - 1];<br>  }<br>  isEmpty() {                     // Check if empty<br>    return this.items.length === 0;<br>  }<br>}<br>```",
    107: "<b>Logic:</b><br>Design a stack that supports retrieving the minimum in constant time:<br>- Maintain a secondary stack to track minimums.<br>- Push to <code>minStack</code> only when new value ≤ current min.<br><br><strong>Example:</strong><br>```js<br>class MinStack {<br>  constructor() {<br>    this.stack = new Stack();     // Normal stack<br>    this.minStack = new Stack(); // Tracks minimums<br>  }<br>  push(value) {<br>    this.stack.push(value);<br>    if (this.minStack.isEmpty() || value <= this.minStack.peek()) {<br>      this.minStack.push(value);<br>    }<br>  }<br>  pop() {<br>    const popped = this.stack.pop();<br>    if (popped === this.minStack.peek()) {<br>      this.minStack.pop();<br>    }<br>    return popped;<br>  }<br>  getMin() {<br>    return this.minStack.peek(); // O(1) access to min<br>  }<br>}<br>```",
    108: "<b>Logic:</b><br>Evaluate a postfix expression using a stack:<br>- Traverse tokens left to right.<br>- Push numbers to stack.<br>- On operator, pop 2 numbers, apply it, push result back.<br><br><strong>Example:</strong><br>```js<br>function evaluatePostfix(expression) {<br>  const stack = new Stack();<br>  const tokens = expression.split(\" \");<br>  for (let token of tokens) {<br>    if (!isNaN(token)) {<br>      stack.push(parseInt(token));      // Push number<br>    } else {<br>      const b = stack.pop();            // Pop operands<br>      const a = stack.pop();<br>      switch (token) {<br>        case \"+\": stack.push(a + b); break;<br>        case \"-\": stack.push(a - b); break;<br>        case \"*\": stack.push(a * b); break;<br>        case \"/\": stack.push(Math.floor(a / b)); break;<br>      }<br>    }<br>  }<br>  return stack.pop();<br>}<br>```",
    109: "<b>Logic:</b><br>Simulate undo operation using a stack:<br>- Push actions normally.<br>- On <code>UNDO</code>, pop the last action.<br>- At end, reconstruct list from stack.<br><br><strong>Example:</strong><br>```js<br>function processActions(actions) {<br>  const stack = new Stack();<br>  for (let action of actions) {<br>    if (action === \"UNDO\") {<br>      stack.pop();                  // Remove last action<br>    } else {<br>      stack.push(action);          // Save action<br>    }<br>  }<br>  const result = [];<br>  while (!stack.isEmpty()) {<br>    result.unshift(stack.pop());   // Rebuild in order<br>  }<br>  return result;<br>}<br>```"
  },
  HASH: {
    110: "<b>Logic:</b><br>Find the first non-repeating character in a string:<br>- Count how often each character appears.<br>- Traverse again to find first character with count = 1.<br><br><strong>Example:</strong><br>```js<br>function firstNonRepeatingChar(str) {<br>  const freq = {}; // Count frequency of characters<br>  for (let char of str) {<br>    freq[char] = (freq[char] || 0) + 1;<br>  }<br>  for (let char of str) {<br>    if (freq[char] === 1) return char; // Return first unique char<br>  }<br>  return null; // No unique character<br>}<br>```",
    111: "<b>Logic:</b><br>Count how many times each element appears in an array:<br>- Use a hashmap where keys are array elements.<br>- Increment count as you iterate.<br><br><strong>Example:</strong><br>```js<br>function frequencyCount(arr) {<br>  const countMap = {}; // Map to store frequency<br>  for (let item of arr) {<br>    countMap[item] = (countMap[item] || 0) + 1; // Update count<br>  }<br>  return countMap; // Return full map<br>}<br>```",
    112: "<b>Logic:</b><br>Group anagrams from an array of strings:<br>- Sort each word to get a common key.<br>- Use a hashmap to group by key.<br><br><strong>Example:</strong><br>```js<br>function groupAnagrams(strs) {<br>  const map = {}; // Key: sorted word, Value: list of anagrams<br>  for (let word of strs) {<br>    const sorted = word.split('').sort().join('');<br>    if (!map[sorted]) map[sorted] = [];<br>    map[sorted].push(word); // Group under the sorted key<br>  }<br>  return Object.values(map); // Return all grouped anagram arrays<br>}<br>```",
    113: "<b>Logic:</b><br>Check if two strings are isomorphic:<br>- Each char in one string should map to only one in the other (and vice versa).<br>- Use two hashmaps for bidirectional tracking.<br><br><strong>Example:</strong><br>```js<br>function isIsomorphic(s, t) {<br>  if (s.length !== t.length) return false;<br>  const mapST = {}; // s → t<br>  const mapTS = {}; // t → s<br>  for (let i = 0; i < s.length; i++) {<br>    const a = s[i];<br>    const b = t[i];<br>    if ((mapST[a] && mapST[a] !== b) || (mapTS[b] && mapTS[b] !== a)) {<br>      return false; // Conflict in mapping<br>    }<br>    mapST[a] = b;<br>    mapTS[b] = a;<br>  }<br>  return true;<br>}<br>```"
  },
  QUEUE: {
    114: "<b>Logic:</b><br>Reverse the first <code>k</code> elements of a queue:<br>- Use a stack to reverse the first <code>k</code> elements.<br>- Dequeue <code>k</code> items into a stack (reverses order).<br>- Push back into queue, then rotate the rest.<br><br><strong>Example:</strong><br>```js<br>function reverseFirstK(queue, k) {<br>  const stack = [];<br>  // Step 1: Dequeue k elements into stack<br>  for (let i = 0; i < k; i++) {<br>    stack.push(queue.dequeue());<br>  }<br>  // Step 2: Enqueue reversed elements<br>  while (stack.length > 0) {<br>    queue.enqueue(stack.pop());<br>  }<br>  // Step 3: Rotate the remaining elements<br>  const size = queue.size();<br>  for (let i = 0; i < size - k; i++) {<br>    queue.enqueue(queue.dequeue());<br>  }<br>}<br>```",
    115: "<b>Logic:</b><br>Generate binary numbers from 1 to <code>n</code> using a queue:<br>- Enqueue \"1\" initially.<br>- For <code>n</code> iterations:<br>&nbsp;&nbsp;- Dequeue <code>s</code>, push to result.<br>&nbsp;&nbsp;- Enqueue <code>s + '0'</code> and <code>s + '1'</code>.<br><br><strong>Example:</strong><br>```js<br>function generateBinary(n) {<br>  const result = [];<br>  const queue = new Queue();<br>  queue.enqueue(\"1\");<br><br>  for (let i = 0; i < n; i++) {<br>    const curr = queue.dequeue();<br>    result.push(curr);<br>    queue.enqueue(curr + \"0\");<br>    queue.enqueue(curr + \"1\");<br>  }<br><br>  return result;<br>}<br>```",
    116: "<b>Logic:</b><br>Count the number of requests in the past 3000ms:<br>- On each <code>ping(t)</code>, enqueue <code>t</code>.<br>- While the oldest timestamp is out of the 3000ms window, dequeue it.<br>- Return the current size of the queue.<br><br><strong>Example:</strong><br>```js<br>class RecentCounter {<br>  constructor() {<br>    this.queue = new Queue();<br>  }<br><br>  ping(t) {<br>    this.queue.enqueue(t);<br><br>    // Remove timestamps older than t - 3000<br>    while (!this.queue.isEmpty() && this.queue.peek() < t - 3000) {<br>      this.queue.dequeue();<br>    }<br><br>    return this.queue.size();<br>  }<br>}<br>```"
  },
  PRIORITYQUEUE: {
    117: "<b>Logic:</b><br>Return the <code>k</code>th largest element using a min-heap:<br>- Maintain a priority queue (min-heap) of size <code>k</code>.<br>- Iterate through array, insert element.<br>- If heap size > k, remove the smallest.<br>- The top of heap is kth largest.<br><br><strong>Example:</strong><br>```js<br>function kthLargest(arr, k) {<br>  const pq = new PriorityQueue((a, b) => a - b);<br>  for (const num of arr) {<br>    pq.enqueue(num); // Add number<br>    if (pq.size() > k) pq.dequeue(); // Keep size to k<br>  }<br>  return pq.peek(); // Kth largest is on top<br>}<br>```",
    118: "<b>Logic:</b><br>Return the smallest element from an array using a priority queue:<br>- Insert all elements into a min-heap.<br>- The root of the heap will be the smallest.<br><br><strong>Example:</strong><br>```js<br>function findSmallestElement(arr) {<br>  const pq = new PriorityQueue((a, b) => a - b);<br>  for (const num of arr) pq.enqueue(num);<br>  return pq.peek(); // Smallest element is at the root<br>}<br>```",
    119: "<b>Logic:</b><br>Sort an array using a priority queue:<br>- Use a min-heap.<br>- Insert all elements, then dequeue to get sorted result.<br><br><strong>Example:</strong><br>```js<br>function sortArray(arr) {<br>  const pq = new PriorityQueue((a, b) => a - b);<br>  for (const num of arr) pq.enqueue(num);<br><br>  const result = [];<br>  while (!pq.isEmpty()) {<br>    result.push(pq.dequeue()); // Extract in order<br>  }<br>  return result;<br>}<br>```"
  },
  BINARYSEARCHTREE: {
    120: "<b>Logic:</b><br>Search for a value in a binary search tree:<br>- Start at the root node.<br>- If value equals current node, return <code>true</code>.<br>- If value is smaller, go left; otherwise, go right.<br>- If we hit <code>null</code>, it's not in the tree.<br><br><strong>Example:</strong><br>```js<br>function searchInBST(bst, value) {<br>  let current = bst.root;<br>  while (current !== null) {<br>    if (value === current.value) return true; // Found it<br>    current = value < current.value ? current.left : current.right; // Traverse<br>  }<br>  return false; // Not found<br>}<br>```",
    121: "<b>Logic:</b><br>Insert a value into a binary search tree:<br>- If tree is empty, make the new value the root.<br>- Else walk down the tree:<br>&nbsp;&nbsp;- If smaller, go left; if larger or equal, go right.<br>- Insert when an empty child spot is found.<br><br><strong>Example:</strong><br>```js<br>function insertIntoBST(bst, value) {<br>  const newNode = { value, left: null, right: null };<br>  if (bst.root === null) {<br>    bst.root = newNode; // Set root if empty<br>    return;<br>  }<br>  let current = bst.root;<br>  while (true) {<br>    if (value < current.value) {<br>      if (!current.left) { current.left = newNode; return; }<br>      current = current.left;<br>    } else {<br>      if (!current.right) { current.right = newNode; return; }<br>      current = current.right;<br>    }<br>  }<br>}<br>```",
    122: "<b>Logic:</b><br>Find the minimum value in a BST:<br>- Go to the leftmost node.<br>- That node contains the smallest value.<br><br><strong>Example:</strong><br>```js<br>function findMinimumValue(bst) {<br>  if (!bst.root) return null;<br>  let current = bst.root;<br>  while (current.left) current = current.left;<br>  return current.value; // Found leftmost<br>}<br>```",
    123: "<b>Logic:</b><br>Find the maximum value in a BST:<br>- Go to the rightmost node.<br>- That node contains the largest value.<br><br><strong>Example:</strong><br>```js<br>function findMaximumValue(bst) {<br>  if (!bst.root) return null;<br>  let current = bst.root;<br>  while (current.right) current = current.right;<br>  return current.value; // Found rightmost<br>}<br>```"
  },
  DIJKSTRA: {
    124: "Use Dijkstra's algorithm to find the shortest path in a simple weighted graph.",
    125: "Use a priority queue to track minimum distances while updating neighbors (medium difficulty).",
    126: "Solve a complex graph shortest path using Dijkstra with custom edge weights and nodes (hard)."
  },
  "SYSTEM DESIGN": {
    127: "Use Array/List for slots, LinkedList for vehicle entry/exit.",
    128: "Use Queue for messages, HashMap for users, and List for conversations.",
    129: "Use HashMap to store bookings, arrays for availability, and linked list for queues.",
    130: "Stack for cart history, Array for items, Queue for delivery processing.",
    131: "Queue + HashMap per user; distribute messages using event bus or socket buffer.",
    132: "Use Arrays + HashMap for user-item matrix. Stack for recent views.",
    133: "Use Stack to store recent sites and clear from top.",
    134: "Two stacks: one for back, one for forward navigation.",
    135: "Use HashMap with timestamps or categories to store receipts efficiently.",
    136: "Use Dijkstra's algorithm + real-time traffic API. Graph nodes are intersections; edges are roads with live weights.",
    137: "Model each transport leg as a graph edge. Include transfer penalties. Use modified Dijkstra for fastest trip.",
    138: "Use min-heap priority queue based on distance to dispatch nearest responder. Track availability status.",
    139: "Use A* or Dijkstra with time-aware grid. Add collision constraints to avoid intersecting robot paths.",
    140: "Graph with weighted nodes and elevators/stairs as vertical edges. Use filters for accessibility constraints.",
    141: "Use Geo-DNS + RTT monitoring. Hash client location to closest server node using distributed lookup.",
    142: "Use priority queues with deadline as key. Preempt running jobs if a higher-priority job is inserted.",
    143: "Use rules or ML classifier to assign severity score. Sort and dequeue based on SLA and VIP tier.",
    144: "Use a min-heap (priority queue) for top-K. HashMap for quick score lookup and updates."
  }

};
