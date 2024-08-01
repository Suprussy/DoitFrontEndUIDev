<div v-if="true">
  화면에 표현되는 태그
</div>
<div v-else>
  화면에 표현되지 않는 태그
</div>

<div v-show="true">
  화면에 표현되는 태그
</div>
<div v-show="false"> <!-- 'display: none'으로 처리됨 -->
  화면에 표현되지 않는 태그
</div> <!-- 표시 여부가 자주 변경될 때 사용 -->