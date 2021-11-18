<template>
  <base-container>
    <p class="example-1">Before and After</p>
    
    <p class="example-2">This is a nice quote from someone really smart</p>

    <p class="example-3">This link has a <a href="#" data-tool-tip="Here is the tooltip content">tool tip</a>.</p>

    <div class="example-4">
      <h1>We can number sections!</h1>
      <h2 class="section">Section title here</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <h2 class="section">Section title here</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <h2 class="section">Section title here</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <h2 class="section">Section title here</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <h2 class="section">Section title here</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <ol>
        <li>I'm a list item</li>
        <li>me too!</li>
        <li>me three</li>
        <li>Hello there</li>
      </ol>
      <ol>
        <li>I'm a list item</li>
        <li>me too!</li>
        <li>me three</li>
        <li>Hello there</li>
      </ol>
    </div>
  </base-container>
</template>

<script>
export default {
  name: 'BeforeAfter',
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 48px;
  font-weight: $font-semibold;
}
.example-1 {
  font-size: 2rem;
  display: block;
  color: seagreen;
  &::before {
    content: 'hello';
    background: slateblue;
    color: $text-lighter;
    padding: 0 4px;
    font-size: 12px;
  }
  &::after {
    content: 'bye';
    background: slateblue;
    color: $text-lighter;
    padding: 0 4px;
    font-size: 12px;
    display: block;
  }
}
.example-2 {
  font-size: 2rem;
  &::before, &::after {
    color: #ddd;
  }
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
}
.example-3 {
  display: block;
  a[data-tool-tip] {
    position: relative;
    &::after {
      content: attr(data-tool-tip);
      display: block;
      position: absolute;
      font-size: .75em;
      background-color: #333333cc;
      border-radius: 5px;
      padding: 8px;
      color: $white;
      left: 0;
      bottom: calc(100% + 4px);
      white-space: nowrap;
      opacity: 0;
      transform: scale(0);
      transition: opacity .2s ease-in-out;
    }
    &:hover::after {
      opacity: 1;
      transform: scale(1);
    }
  }
}
.example-4 {
  flex-direction: column;
  counter-reset: my-counter;
  h1 {
    margin-bottom: 1.5rem;
  }
  .section {
    display: block;
    font-weight: bold;
    margin-bottom: .8rem;
    &::before {
      counter-increment: my-counter;
      content: counter(my-counter) '. ';
    }
  }
  p {
    margin-bottom: 1rem;
  }
}
</style>