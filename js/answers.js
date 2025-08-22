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
    43: "Is HTML a programming language?"
  },
  CSS: {
    44: "Describe the “box model” in CSS.",
    45: "What are CSS preprocessors, and why might you use one?",
    46: "Explain the difference between a class selector and an ID selector.",
    47: "How can you achieve a responsive design without using any frameworks?",
    48: "What is the difference between relative, absolute, fixed, and sticky positioning?",
    49: "What is tailwind?",
    50: "Name an alternative to CSS for designing a webpage.",
    51: "Is CSS a programming language?",
    52: "Describe your thought process in how you would go about centering an element relative to its parent element?"
  },
  JavaScript: {
    53: "Explain the difference between let, const, and var.",
    54: "How does event propagation work in JavaScript? What are event bubbling and capturing?",
    55: "Describe the difference between synchronous and asynchronous operations in JavaScript.",
    56: "What is this keyword, and how does it work in JavaScript?",
    57: "Can you explain what promises are and provide an example of how they might be used?",
    58: "What does i++ mean in JavaScript?",
    59: "What does ++i mean in JavaScript?"
  },
  Python: {
    60: "What is indentation in Python?",
    61: "What is FastAPI? What is special about it?",
    62: "Name one major advantage and one major disadvantage of using Python.",
    63: "What is a Python environment?",
    64: "What does the “self.” mean in object-oriented programming in Python?",
    65: "What is a Python Environment, and why is it useful? In which cases?"
  },
  "AI Development and Theory": {
    66: "What is a neural network?",
    67: "Name a classification model and a situation where you will use it.",
    68: "Name a regression model and a situation where you will use it.",
    69: "What is reinforcement learning?",
    70: "What are recommendation systems? What are its two main kinds of filtering?",
    71: "Explain BackPropagation.",
    72: "What is Natural Language Processing? How does it work? Name a library you find useful for doing this process.",
    73: "What is RAG? How does it work?",
    74: "What is a Transformer? How does it work?",
    75: "What is Sentiment Analysis? Name a library and explain how you will use it."
  },
  ARRAYS: {
    76: "Find the Missing Number: Given an array containing n distinct numbers taken from 0 to n, find the one that is missing.",
    77: "Median of Two Sorted Arrays: Given two sorted arrays, find the median element when the arrays are merged.",
    78: "Largest Subarray with Zero Sum: Find the length of the largest subarray with a sum of zero in a given array.",
    79: "Maximum Product Subarray: Find the contiguous subarray within an array that has the largest product."
  },
  LINKEDLIST: {
    80: "Reverse a LinkedList: Reverse a singly linked list in-place.",
    81: "Detect a Cycle: Determine if a linked list has a loop.",
    82: "Find Middle Node: Return the middle node of a linked list.",
    83: "Merge Two Sorted Lists: Merge two sorted linked lists into one sorted list.",
    84: "Remove Duplicates: Remove duplicate elements from a sorted linked list."
  },
  "DOUBLELINKEDLIST": {
    85: "Reverse a Doubly Linked List: Reverse a doubly linked list in-place.",
    86: "Delete a Given Node: Delete a node from a doubly linked list in O(1) time.",
    87: "Insert Before a Node: Insert a new node before a given node.",
    88: "Check Palindrome: Check if the list reads the same forward and backward.",
    89: "Detect a Cycle: Determine if the doubly linked list has a loop."
  },
  STACK: {
    90: "Implement Stack: Implement a stack using an array or list.",
    91: "Min Stack: Design a stack that supports retrieving the minimum element in constant time.",
    92: "Evaluate Postfix: Evaluate a postfix (Reverse Polish) expression using a stack.",
    93: "Undo Operation: Simulate an undo operation using a stack."
  },
  "SYSTEM DESIGN": {
    94: "Parking Lot Design: Design a parking lot management system.",
    95: "Chat Application Design: Design a simple chat application (server, clients, messages, etc.).",
    96: "Design a Booking System: Design a reservation and booking system for a hotel or airline.",
    97: "Design an Online Food Ordering System: Design a system for online food ordering and delivery.",
    98: "Design a Distributed Messaging System: Design a distributed messaging platform like WhatsApp or Slack.",
    99: "Design a Content Recommendation System: Design a system that recommends content to users based on their preferences and behavior.",
    100: "Design a Web Browser Cleaner: Design a system that can clean the most recent history or cookies of a user.",
    101: "Design a System to Navigate Web History: Design a system to go forward and backward through user history.",
    102: "Design a storage system for receipts: Design an efficient storage system only for keeping receipts."
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
    43: "No, HTML is a markup language, not a programming language."
  },
  CSS: {
    44: "Content + Padding + Border + Margin define an elements layout box.",
    45: "Tools like SASS/LESS that allow variables, mixins, and nesting for better CSS organization.",
    46: "Class selectors (`.btn`) can apply multiple times; ID selectors (`#main`) must be unique.",
    47: "Use media queries, percentages, rem/em units, and CSS Grid/Flexbox.",
    48: "Relative = based on parent <br>Absolute = based on nearest relative parent <br>Fixed = viewport <br> Sticky = scroll-aware.",
    49: "Tailwind is a utility-first CSS framework with pre-defined classes for styling.",
    50: "Styled Components, Emotion (CSS-in-JS), or frameworks like Bootstrap.",
    51: "No, CSS is a stylesheet language.",
    52: "Use `display: flex; justify-content: center; align-items: center;` on the parent."
  },
  JavaScript: {
    53: "`let` = block-scoped, mutable <br> `const` = block-scoped, immutable <br> `var` = function-scoped, older.",
    54: "Bubbling = inner to outer <br> Capturing = outer to inner. <br> Use `addEventListener` with capture flag.",
    55: "Synchronous runs line by line; Asynchronous uses callbacks, promises, or async/await.",
    56: "`this` refers to the context where the function is called (object, global, etc.).",
    57: "Promises handle async operations. Example: `fetch().then().catch()`.",
    58: "`i++` increments after the current operation.",
    59: "`++i` increments before the current operation."
  },
  Python: {
    60: "Python uses indentation (whitespace) to define blocks of code instead of braces.",
    61: "FastAPI is a high-performance web framework for APIs, supports async and auto-docs.",
    62: "Advantage: Easy to read and use. Disadvantage: Slower than compiled languages.",
    63: "A Python environment is an isolated setup (like venv) for managing dependencies.",
    64: "`self` refers to the instance of the class used to access attributes and methods.",
    65: "Useful to avoid package/version conflicts, especially in multi-project setups."
  },
  "AI Development and Theory": {
    66: "A neural network is a layered model mimicking how the brain processes input.",
    67: "Some classification models include Logistic Regression, KNN, SVM, Naive Bayes, Decision Tree,and Random Forest. <br> Used for classifying. For example it can be use for spam mail detection or sentimental analysis.",
    68: "Some regression models include Linear Regression and Polynomial. They are use for predictions based certain data. For example predicting house prices based on size.",
    69: "Learning by trial and error with rewards/punishments — used in gaming, robotics.",
    70: "Recommend items based on user data. Two types: Collaborative and Content-based filtering.",
    71: "Algorithm to update weights in a neural network by propagating errors backward.",
    72: "NLP processes human language. Example library: spaCy or NLTK.",
    73: "RAG = Retrieval Augmented Generation. Combines knowledge base with generative LLMs.",
    74: "Transformers use attention mechanisms to understand token relationships. Core of models like BERT, GPT, Gemini.",
    75: "Determines sentiment (positive/negative) in text. Use libraries like TextBlob or HuggingFace transformers."
  },
  ARRAYS: {
    76: "Check that the element in next index is not the consecutive one",
    77: "Merge both arrays, sort, return middle (or average of two if even).",
    78: "To find the longest contiguous subarray made only of zeros:<br>- Loop through the array while tracking a `currentCount` of consecutive zeroes.<br>- If a zero is found, increment the counter.<br>- If a non-zero is found, reset the counter to 0.<br>- Track the `maxCount` to store the longest chain of zeros found.<br><br><strong>Example Logic:</strong><br>```js<br>let currentCount = 0;<br>let maxCount = 0;<br>for (let i = 0; i < arr.length; i++) {<br>  if (arr[i] === 0) {<br>    currentCount++;<br>    maxCount = Math.max(maxCount, currentCount);<br>  } else {<br>    currentCount = 0;<br>  }<br>}<br>return maxCount;<br>```",
    79: "To find the maximum product of any contiguous subarray (with only positive, non-zero integers):<br>- Loop through the array and track a `currProd` (current running product).<br>- If multiplying with the previous product decreases the value, reset `currProd` to the current number.<br>- Track `maxProd` to store the highest product found so far.<br>- This approach avoids extra complexity like handling negative flips, since all numbers are positive.<br><br><strong>Example Logic:</strong><br>```js<br>let maxProd = nums[0];<br>let currProd = nums[0];<br>for (let i = 1; i < nums.length; i++) {<br>  const num = nums[i];<br>  currProd = Math.max(num, currProd * num);<br>  maxProd = Math.max(maxProd, currProd);<br>}<br>return maxProd;<br>```"

  },
  LINKEDLIST: {
    80: "Iteratively reassign `.next` pointers while storing previous node.",
    81: "Use Floyds cycle detection algorithm (slow & fast pointer).",
    82: "Use slow and fast pointer; return slow when fast reaches end.",
    83: "Compare head values and link smaller one recursively or iteratively.",
    84: "Traverse list, compare current and next node, and skip duplicates."
  },
  DOUBLELINKEDLIST: {
    85: "Swap `.next` and `.prev` pointers for each node while traversing.",
    86: "Adjust `.next` and `.prev` of neighboring nodes; O(1) if node is given.",
    87: "Create a new node and adjust `.prev` and `.next` of involved nodes.",
    88: "Use two pointers from head and tail to compare values until they meet.",
    89: "Similar to singly linked list — use visited set or slow/fast pointers."
  },
  STACK: {
    90: "Use an array with push and pop functions.",
    91: "Keep a stack of values and another of minimums.",
    92: "Use stack to push operands; pop for operations; evaluate step by step.",
    93: "Push operations to stack, pop to undo the last action."
  },
  "SYSTEM DESIGN": {
    94: "Use Array/List for slots, LinkedList for vehicle entry/exit.",
    95: "Use Queue for messages, HashMap for users, and List for conversations.",
    96: "Use HashMap to store bookings, arrays for availability, and linked list for queues.",
    97: "Stack for cart history, Array for items, Queue for delivery processing.",
    98: "Queue + HashMap per user; distribute messages using event bus or socket buffer.",
    99: "Use Arrays + HashMap for user-item matrix. Stack for recent views.",
    100: "Use Stack to store recent sites and clear from top.",
    101: "Two stacks: one for back, one for forward navigation.",
    102: "Use HashMap with timestamps or categories to store receipts efficiently."
  }
};
