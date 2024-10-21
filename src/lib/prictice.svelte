<script>
  export let titleh1;
  export let span1;
  export let span2 = " ";
</script>

<div class="projects w-[300px] p-4 bg-blue-700 shadow-lg rounded-2xl">
  <h1 class="text-2xl">{titleh1}</h1>
  <span>
    <span class="text-white"> {span1}</span>{span2}
  </span>
</div>

<div
  class="box-left relative w-64 h-32 bg-white flex flex-col justify-center m-5 rounded-lg overflow-hidden"
>
  <h1 class="text-2xl">{titleh1}</h1>
  <span>
    <span class="text-white"> {span1}</span>{span2}
  </span>
  <!-- Triangular Effect on the Left -->
  <div
    class="absolute top-0 left-0 w-0 h-0 border-t-[120px] border-t-blue-700 border-r-[120px] border-r-transparent"
  ></div>
</div>

<!-- Right Box -->
<div
  class="box-right relative w-64 h-32 bg-white flex flex-col justify-center m-5 rounded-lg overflow-hidden"
>
  <h1 class="text-2xl">{titleh1}</h1>
  <span>
    <span class="text-white"> {span1}</span>{span2}
  </span>
  <!-- Triangular Effect on the Right -->
  <div
    class="absolute top-0 right-0 w-0 h-0 border-t-[120px] border-t-blue-700 border-l-[120px] border-l-transparent"
  ></div>
</div>
