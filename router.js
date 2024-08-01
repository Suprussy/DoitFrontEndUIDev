const router = new VueRouter({
  mode: "history", // url(#) 해시값 삭제를 위한 설정
  routes: [
    {
      path: "url", // 브라우저에 표현될 URL 설정
      name: "Home", // 컴포넌트 이름
      component: {
        header: () => import("/layout/header.vue"),
        content: () => import("/layout/content.vue")
      },
      children: [
        {
          path: "suburl1",
          name: "sub",
          component: () => import("sub.vue")
          // 웹 브라우저에서 홈페이지 주소 뒤에 /url/suburl1을 붙이면
          // index.vue의 <router-view> 영역에 sub.vue의 내용이 출력됨
        }
      ]
    }
  ]
})