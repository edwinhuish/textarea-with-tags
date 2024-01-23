<script lang="ts" setup>
const availaleTags = ['#美食#', '#运动#'] as const;

type Tag = typeof availaleTags[number];

const txt = ref('');
const tags = ref<Tag[]>([]);

const tagStr = computed(() => tags.value.length ? `${tags.value.join(' ')} ` : '');

const mixed = computed({
  get: () => tagStr.value + txt.value,
  set: (content) => {
    const pieces = content.split(' ');

    const deletedTags: Tag[] = [];

    for (const tag of tags.value) {
      if (!pieces.includes(tag)) {
        deletedTags.push(tag);
      }
    }

    // 有删除的tag
    if (deletedTags.length) {
      tags.value = tags.value.filter(tag => !deletedTags.includes(tag));
      return;
    }

    txt.value = content.slice(tagStr.value.length);
  },
});

function addTag() {
  for (const tag of availaleTags) {
    if (!tags.value.includes(tag)) {
      tags.value.push(tag);
      return;
    }
  }
}
</script>

<template>
  <view class="wrapper">
    <textarea
      v-model="mixed"
      class="content"
    />
    <view class="tags">
      {{ tagStr }}
    </view>
    <button @click="addTag">
      增加 tag
    </button>
  </view>
</template>

<route lang="json">
{
  "layout": "home"
}
</route>

<style scoped>
.wrapper {
  position: relative;

}

.content{
  border: 1px solid #ccc;
  width:100%;
  text-align: left;
}

.tags{
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: #fff;
  color:blue;
}
</style>
