<template>
    <core-auth #default="{ guestState }">
        <section class="hero is-fullheight is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <router v-if="guestState"/>
                </div>
            </div>
        </section>
    </core-auth>
</template>

<script>
import CoreAuth from '../../core/layouts/Auth.vue';
import Router from '@enso-ui/ui/src/bulma/pages/Router.vue';

export default {
    name: 'Auth',

    components: { CoreAuth, Router },
};
</script>
