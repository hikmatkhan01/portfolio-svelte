<script>
  import ContentBottom from "./ContentBottom.svelte";
  import Icons from "./Icons.svelte";
  let socialLinks = [
    {
      link: "https://www.linkedin.com",
      Icons: "fa-brands fa-linkedin-in",
    },
    {
      link: "skype:your_skype_id",
      Icons: "fab fa-skype",
    },
    {
      link: "https://twitter.com",
      Icons: "fab fa-twitter",
    },
    {
      link: "https://www.facebook.com",
      Icons: "fa-brands fa-facebook-f",
    },
  ];
</script>

<div class="content flex justify-between w-full md:w-[100%] bg-gray-500">
  <div
    class="left w-full md:w-[30%] min-h-[500px] bg-white shadow-2xl p-1 rounded-2xl overflow-hidden"
  >
    <img
      src="./images/down1.jpg"
      alt="not loded"
      class="w-full h-full object-cover rounded-xl"
    />
  </div>
  <div class="right w-full md:w-[67%]">
    <div class="right1 p-10 bg-white rounded-3xl shadow-lg">
      <span class="sub-title text-gray-600 text-sm font-medium"
        >Hi, I am Hikmat Khan</span
      >
      <h1
        class="text-4xl font-extrabold mt-4 mb-8 leading-[58px] text-[#141414] font-kaisei"
      >
        Full Stack Mobile Apps & <br />Web Developer
      </h1>
      <p class="mt-4 text-[#74787C] font-light text-base leading-[29px]">
        I excel in creating innovative and user-friendly mobile applications.
        With expertise in programming languages like C++, Java, Dart, Flutter
        (both Android and iOS), and MySQL, SQLite, Firebase, along with Google
        Play Console. Additionally, I am a proficient web developer, well-versed
        in HTML, CSS, Bootstrap, JS, PHP, and Laravel. I deliver top-notch
        mobile and web solutions.
      </p>

      <Icons socialLink={socialLinks} />
    </div>
    <div
      class="bottom-right1 flex mt-4 bg-slate-600 shadow-lg rounded-2xl gap-3"
    >
      <ContentBottom titleh1="2+" span1="Years Exp " span2="experince" />
    </div>
  </div>
</div>
