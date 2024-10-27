<script>
    import ComboBox from "$lib/ComboBox.svelte";
    import { ChevronsUpDown, Container, Search } from "lucide-svelte";
    import NavMenu from "./NavMenu.svelte";
    import MailItem from "$lib/MailItem.svelte";
    import sample_mails from "./emails.js";
    import MailMenu from "./MailMenu.svelte";
    import MailContent from "./MailContent.svelte";


    const email_services = [
        {label:"Korvac Tak", value: "korvac@gmail.com", icon:"/gmail.svg"},
        {label:"Korvac Takeshi", value: "korvac@yahoo.com", icon: "/yahoo.svg"},
        {label:"Korvac Tak", value: "mail@korvac.com", icon: "/logo.svg"}
    ];

    let selected_email_service_index = 2;


    let selected_email_index = 0;
    

</script>

<div class="flex">
    <div class="h-screen w-72 shrink-0 border-r border-base-content/10">
        <div class="p-2">
            <ComboBox bind:value={selected_email_service_index} items={email_services}>
            <div class="grow p-1 text-left">Korvacs</div>
            <ChevronsUpDown class="w-3 text-base-content/60"/>
            </ComboBox>
        </div>
        <NavMenu></NavMenu>
    </div>
    <div class="max-w-lg w-full border-r shrink-0 border-base-content/10 flex flex-col">
        <div class="p-2 px-4 flex justify-between items-center">
            <h1 class="font-bold text-lg px-2">Inbox</h1>
            <div role="tablist" class="tabs tabs-boxed tabs-sm">
                <a role="tab" class="tab">All mail</a>
                <a role="tab" class="tab tab-active">Unread</a>
            </div>
        </div>
        <div class="p-2 pt-4 px-4 border-t border-t-base-content/5">
            <div class="join w-full border border-base-content/15 focus-within:border-base-content/40">
                <span class="join-item px-2 flex items-center">
                    <Search class="w-4 text-base-content/50"/>
                </span>
                <input placeholder="Search" type="text" class="join-item input input-sm grow focus:border-transparent focus:outline-none pl-1">
            </div>
        </div>
        <div class="overflow-y-auto grow relative">
            <div class="absolute py-2 px-4 top-0 left-0 w-full h-full flex flex-col gap-4">
                {#each sample_mails as details, i}
                    <MailItem {details} selected={i==selected_email_index} set_selected_email={()=>selected_email_index=i}></MailItem>
                {/each}
            </div>
        </div>
    </div>
    <div class="grow flex flex-col">
        <MailMenu></MailMenu>
        <MailContent details={sample_mails[selected_email_index]}></MailContent>
    </div>
</div>
