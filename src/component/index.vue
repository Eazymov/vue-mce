<template lang="html">
  <div class="tinymce">
    <component
      :is="config.inline ? 'div' : 'textarea'"
      class="tinymce__init-area"
      :name="name"
      ref="textarea"
    />
  </div>
</template>

<script lang="js" src="./index.js"></script>

<style lang="sass">
  .tinymce
    height: 100%

    &__init-area
      height: 100%

    & > .mce-container
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

