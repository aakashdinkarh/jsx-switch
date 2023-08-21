# Conditional Rendering is one of the most used concepts while writing a component.

Sometimes rendering logic for the components become complex and we end up writing something which is not readable, also it can cause several unintended bugs.

So to handle that situation we case Switch case as ->

```
<Switch>
    <Case condition={age <= 12} >Kid</Case>
    <Case condition={age > 12 && age <= 18} >Teenager</Case>
    <Case condition={age > 18} >Adult</Case>
    <Default>Person</Default>
</Switch>
```
