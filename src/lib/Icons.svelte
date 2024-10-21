<script>
  export let socialLink = [];
</script>

<div class="icons mt-10">
  <div class="flex space-x-4">
    {#each socialLink as social, index}
      <a
        href={social.link}
        target="_blank"
        class="text-black bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 h-[50px] w-[50px] flex justify-center
        items-center transition-all duration-[1000ms] ease-linear transform hover:-translate-y-2"
      >
        <i class="{social.Icons} rounded-full"></i>
      </a>
    {/each}
  </div>
</div>
