<template>
  <div class="card">
    <div class="card-content">
      <h2>{{ name }}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        tincidunt, odio id aliquam convallis, tellus mi cursus tortor, in
        sodales justo elit eu arcu. Maecenas in est vestibulum, finibus augue
        quis, volutpat leo. Quisque tincidunt, lectus id imperdiet ultrices, leo
        massa malesuada diam, ut scelerisque nunc eros ac lorem. Pellentesque
        tempus ante nec mi gravida, vel pellentesque ex sodales. Suspendisse
        vitae nisl nec dui volutpat fringilla at quis magna. Fusce et
        sollicitudin eros. Nulla facilisi. Phasellus ut vehicula ipsum. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Nam lacinia eget
        magna et condimentum. Donec ut dui tincidunt, gravida eros non, sagittis
        lectus.
        <br />
        Sed vulputate, lacus rhoncus rhoncus vehicula, justo nisl finibus lacus,
        tempus condimentum lacus risus ut metus. Nulla efficitur quam enim, eu
        ullamcorper mauris iaculis ut. Duis blandit elit vitae lacinia pretium.
        Integer at velit consequat, blandit massa et, sollicitudin eros. Integer
        sollicitudin justo a turpis fringilla, eu malesuada lorem interdum. Nam
        venenatis odio eget tempor blandit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada
        vel nisi at aliquam. Ut aliquam gravida dignissim. In ac nisi sed libero
        porta mollis. Morbi metus arcu, posuere eu tempor at, accumsan at felis.
        Ut blandit sed mauris at aliquet.
        <br />
        Ut scelerisque est magna, ut dignissim urna ullamcorper iaculis. Quisque
        eu justo massa. Nunc commodo eros maximus volutpat faucibus. Maecenas a
        elit non ante sagittis porttitor. Nulla facilisi. Praesent eget placerat
        purus. Nulla lacinia lectus laoreet sapien congue vulputate. Etiam
        congue, tortor sit amet eleifend gravida, turpis enim luctus metus, eu
        consequat neque magna nec libero. In molestie malesuada venenatis. Ut
        felis justo, tincidunt sed venenatis ac, convallis vitae justo.
        <br />
        Donec quis elit a tortor tincidunt porta. Sed id dolor convallis,
        laoreet quam sit amet, mollis risus. Maecenas tempus placerat ipsum, vel
        rhoncus leo tempor gravida. Pellentesque quis suscipit nulla. Etiam
        gravida sapien ac libero sodales malesuada. Mauris blandit pretium ex,
        nec vestibulum mi cursus eget. Praesent eu vestibulum sem. Nulla
        hendrerit vestibulum ligula vel luctus. Mauris tortor mi, lacinia in
        pulvinar non, luctus non elit. Nunc nec mauris bibendum purus bibendum
        tristique. Nullam mollis interdum felis eu viverra. Cras ultricies
        tortor sit amet mauris aliquam placerat. Phasellus eget tristique augue,
        eget rhoncus ante.
        <br />
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vivamus tincidunt tellus non leo ornare auctor.
        Morbi id leo est. Praesent sit amet interdum felis. Ut tempor vulputate
        nisl, nec accumsan nibh tincidunt vel. Donec vehicula erat in tempor
        mollis. Sed ultricies metus et eros varius ullamcorper. Etiam sed
        tincidunt nibh, at ullamcorper est. Vivamus arcu turpis, dapibus a eros
        non, ultrices posuere ante. In sit amet velit sit amet lectus bibendum
        accumsan cursus quis augue. Nulla scelerisque felis nec laoreet
        tristique. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </p>
    </div>
    <div class="buttons-container">
      <div class="buttons">
        <NoButton v-bind:cat="name" />
        <YesButton v-bind:cat="name" />
      </div>
    </div>
  </div>
</template>

<script>
import YesButton from './buttons/YesButton.vue';
import NoButton from './buttons/NoButton.vue';
export default {
  name: 'Card',
  props: { name: String },
  components: { YesButton, NoButton },
};
</script>

<style>
.card {
  margin: auto;
  width: 50%;
  background: var(--photo-color);
  height: 48rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  overflow: scroll;
}

.card-content h2 {
  font-size: 2em;
}

.buttons-container {
  width: 100%;
}

.buttons {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
}
</style>