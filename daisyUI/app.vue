<template>
  <div class="p-4">
    <button class="btn">Hello daisyUI</button>
    <div class="dropdown">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <div class="alert alert-success shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>
    </div>

    <div>
      <div class="mx-2 badge">neutral</div>
      <div class="mx-2 badge badge-primary">primary</div>
      <div class="mx-2 badge badge-secondary">secondary</div>
      <div class="mx-2 badge badge-accent">accent</div>
      <div class="mx-2 badge badge-ghost">ghost</div>
    </div>
  </div>
</template>
