<template>
      <mdc-layout-grid>
        <mdc-layout-cell desktop="12" tablet="12" phone="12">
          <div class="inline"><img src="../assets/agit-logo.png" alt="Agit Pop"></div>
        </mdc-layout-cell>
      </mdc-layout-grid>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: String,
      vmaLinks: Array,
      mdcLinks: Array
    }
  }
</script>

<style lang="scss">
  // First, set the value for variable
  $mdc-layout-grid-max-width: 800px;

  // Then, import required files
  @import "@material/layout-grid/mdc-layout-grid";
  @import "@material/rtl/mixins";
  @import "@material/theme/color-palette";
  @import "@material/theme/mixins";

  html {
    background-image: linear-gradient(to left, rgb(0, 174, 255), rgb(94, 8, 232));
  }

  .inline {
    padding-top: 30vh;
    align-content: center;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
