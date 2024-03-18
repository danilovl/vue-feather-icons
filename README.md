# Vue feather icons #

## About ##

Vue feather icons for vue3. Icons with names in readme folder.

![Alt text](/readme/icons.png?raw=true "Icons")

 

### Requirements

* Vue 3.3 or higher

### 1. Installation

```npm
npm install --save danilovl-vue-feather-icons
npm install --save https://github.com/danilovl/vue-feather-icons
```

### 2. Usage

If you import icon from `src/dist`, there ia already imported `import {h} from 'vue'`.

```javascript
import * as icons from 'danilovl-vue-feather-icons/src/dist/vue-feather-icons'
import * as icons from 'danilovl-vue-feather-icons/src/dist/vue-feather-icons.min'

import {ActivityIcon} from 'danilovl-vue-feather-icons/src/dist/vue-feather-icons'
```

```javascript
<script>
import * as icons from 'danilovl-vue-feather-icons/src/dist/vue-feather-icons'

const svg = h(icons['ActivityIcon']);
</script>    
```

```vue
<ActivityIcon/>

<script setup>
import {ActivityIcon} from 'danilovl-vue-feather-icons/src/dist/vue-feather-icons'
</script>
```

If you import icon separately from `src/icons`, you must check if `h` globally exists. If not, you must set it to icon.

```javascript
import {ActivityIcon} from 'danilovl-vue-feather-icons/src/icons/ActivityIcon'
```

```vue
<ActivityIcon :h="h"/>

<script setup>
import {h} from 'vue'
import {ActivityIcon} from 'danilovl-vue-feather-icons/src/icons/ActivityIcon'    
</script>
```

Every icon has props parameters.

`h` is a Vue render function and does not exist globally.

`svg` is used when you want to add additional tags to the SVG element.

```
props: {
    h: {
        type: Object,
        required: false
    },
    svg: {
        type: Object,
        required: false
    }
}
```

## License

The Vue feather icons is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
