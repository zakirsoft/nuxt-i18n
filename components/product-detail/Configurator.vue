<template>
    <div class="configurator">
        <div>
            <h2 class="h1 d-inline-block underline my-4">
                Ihr individueller {{ $parent.product.name }}
            </h2>
        </div>
        <b-list-group>
            <b-list-group-item v-for="config in configurations" :key="config.key">
                <div class="h2">
                    {{ config.key }}
                </div>
                <b-form-radio
                    v-for="option in config.options"
                    :key="option.value"
                    :value="option.value"
                    :name="config.key"
                    size="lg"
                >
                <div class="row align-items-center">
                    <div class="col-12 col-md-9">
                        {{ option.value }}
                    </div>
                    <div class="col-12 col-md-3 text-right">
                        <template v-if="option.price !== null">
                            +{{ option.price }}€
                        </template>
                        <template v-else>
                            Auf Anfrage
                        </template>
                    </div>
                </div>
                </b-form-radio>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    props: {
        configurations: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style>
    .configurator .custom-control-label {
        display: block;
    }
</style>