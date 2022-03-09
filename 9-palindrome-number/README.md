<h2><a href="https://leetcode.com/problems/palindrome-number/">9. Palindrome Number</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p>

<p>An integer is a <strong>palindrome</strong> when it reads the same backward as forward.</p>

<ul>
	<li>For example, <code>121</code> is a palindrome while <code>123</code> is not.</li>
</ul>
</br>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

</br>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>


<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?

<p>&nbsp;</p>
<strong>Notes 📝  </strong>

<pre><strong>Initial trial -> Failed</strong> 
1. when getting input x, need 
  no.1 condition, for integer type, positive number more than 10 
  no.2 condition, when x is dived by a power of 10, the numbers of each place should be a palindrome
2. check if the numbers of each place are the same, 
as the difference of even number or odd number

<strong>✔ Make sure built-in functions in Javascript</strong> 
<strong>✔ Not a question to use the concept of decimal numbers 
✔ Use the concept of String </strong> 
</pre>
</div>
