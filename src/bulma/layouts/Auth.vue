<template>
    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <core-auth v-slot="{ guestState }">
                    <router v-if="guestState"/>
                </core-auth>
            </div>
        </div>
    </section>
</template>

<script>
import CoreAuth from '../../core/layouts/Auth.vue';
import Router from '@enso-ui/ui/src/bulma/pages/Router.vue';

export default {
    name: 'Auth',

    components: { CoreAuth, Router },
};
</script>
