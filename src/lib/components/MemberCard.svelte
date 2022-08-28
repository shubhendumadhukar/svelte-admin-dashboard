<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiFacebook from "svelte-icons-pack/fi/FiFacebook";
    import RiLogoLinkedinBoxLine from "svelte-icons-pack/ri/RiLogoLinkedinBoxLine";
    import FiInstagram from "svelte-icons-pack/fi/FiInstagram";
    import { Link } from "svelte-routing";
</script>

<div class="uk-card uk-card-default uk-border-rounded">
    <div id="wallet-banner" class="uk-card-media-top uk-padding-small">
        <div
            class="member-card uk-height-1-1 uk-width-1-1 uk-padding-small uk-border-rounded"
        >
            <p class="uk-text-uppercase uk-text-bolder">Teacher Account</p>
            <hr />
            <p class="uk-text-small uk-text-captialize">
                Member Since 2022-01-22
            </p>
            <p class="uk-text-small uk-text-captialize">@shubhendu-madhukar</p>
            <div class="uk-text-center uk-margin-large-top">
                <!-- svelte-ignore a11y-missing-content -->
                <a
                    href="/"
                    class="uk-icon-button uk-button-secondary uk-margin-small-right"
                >
                    <Icon src={FiFacebook} color="white" size="1.5em" />
                </a>
                <!-- svelte-ignore a11y-missing-content -->
                <a
                    href="/"
                    class="uk-icon-button uk-button-secondary uk-margin-small-right"
                >
                    <Icon
                        src={RiLogoLinkedinBoxLine}
                        color="white"
                        size="1.5em"
                    />
                </a>
                <!-- svelte-ignore a11y-missing-content -->
                <a href="/" class="uk-icon-button uk-button-secondary">
                    <Icon src={FiInstagram} color="white" size="1.5em" />
                </a>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <Link to="/profile">
            <button
                class="uk-button uk-button-secondary uk-buttom-small uk-width-1-1"
            >
                My Profile
            </button>
        </Link>
    </div>
</div>

<style>
    #wallet-banner {
        background-size: cover !important;
        background-repeat: no-repeat;
        border-radius: 20px 20px 0 0;
        height: 70%;
        background: url("../../assets/blobs.svg");
    }
    .uk-card-body {
        padding: 1.5em;
    }
    .member-card {
        background: rgba(255, 255, 255, 0.4);
        border: 2px solid white;
        color: white;
    }
</style>
