<template lang="html">
  <div class="tinymce">
    <div v-if="error" class="tinymce__err-layout">
      <div class="tinymce__err-layout__err-text">{{ error.message }}</div>
    </div>
    <div v-else class="tinymce__init-area" ref="textarea" v-html="initialValue || value "></div>
  </div>
</template>

<script lang="js" src="./index.js"></script>

<style lang="sass">
  .tinymce
    box-sizing: border-box
    position: relative
    height: 100%
    width: 100%
    padding: 0
    margin: 0

    & *
      box-sizing: border-box
      padding: 0
      margin: 0
    
    &__err-layout
      justify-content: center
      background-color: #fff
      pointer-events: none
      align-items: center
      position: absolute
      display: flex
      height: 100%
      width: 100%
      z-index: 2
      left: 0
      top: 0
      
      &__err-text
        text-align: center
        font-weight: 500
        max-width: 200px
        line-height: 1.4
        font-size: 1rem
        color: #f44336

    &__init-area
      height: 100%

    & > .mce-container
      box-sizing: border-box
      height: 100%
      
      & > .mce-container-body
        flex-flow: column
        display: flex
        height: 100%
        
        .mce-edit-area
          flex-flow: column
          display: flex
          flex-grow: 1
          
          iframe
            flex-grow: 1
</style>

