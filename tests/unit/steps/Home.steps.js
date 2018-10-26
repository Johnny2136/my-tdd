import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import Default from "src/layouts/Default.vue";
import Home from "src/views/Home.vue";
import router from "./src/router.js";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

const feature = loadFeature("tests/unit/features/Home.feature");
defineFeature(feature, test => {
    let localVue;
    // Initialize the Vue.js rendering engine with Quasar and font-awesome
    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Quasar, {
            config: {},
            iconSet: iconSet
        });
    });
    test("Opening the initial web page", ({ given, when, then }) => {
        let wrapper;
        
        // Load our Default layout into the Vue rendering engine along with the Router instance
        given("The page is open in a browser", () => {
            wrapper = mount(Default, { localVue, router });
        });
        
        // There really is not operation here, but we need a `when` clause
        when("I inspect the page", () => {
            // No-Operation
        });

        then("I should see the Home landing page", () => {
            expect(wrapper.html()).toMatch(/^<div.*/);
        });

        then("the page should have a sidebar menu", () => {
            expect(wrapper.find("aside.q-layout-drawer")).toBeDefined();
            expect(wrapper.find("i.q-icon.fas.fa-bars")).toBeDefined();
        });

        then("the page should have a title bar", () => {
            expect(wrapper.find("div.q-toolbar-title")).toBeDefined();
        });

        then("the title bar should contain the correct words", () => {
            expect(wrapper.find("div.q-toolbar-title").text())
                .toMatch(/^My ToDo Application.*/);
        });
    });
    let wrapper;
    test('List on the initial web page', ({ given, when, then, pending }) => {
        given('The page is open in a browser', () => {
            wrapper = mount(Default, { localVue, router });
        });

        when('I inspect the page elements', () => {
            //no operation
        });

        then('I should see a list QListHeadertitle', () => {
            expect(wrapper.find("q-list-header")).toBeDefined();
        });

        then('the QListHeadertitle should contain the correct words', () => {
            expect(wrapper.find("div.q-list-header").text())
                .toMatch(/^My ToDo List:*/);
        });

<<<<<<< HEAD
        then('the page should contain a QList tag', () => {
            expect(wrapper.find("q-list")).toBeDefined();
        });

        then(/^the page should have at least (.*) QListItems$/, (arg0) => {
            expect(wrapper.find("q-list-item")).toBeDefined();
=======
        then("the page should contain a List tag", () => {
            expect(wrapper.html()).toMatch(/^<q-item.*/);
        });

        then("the page should have at least 3 list items", () => {
            expect(wrapper.html()).toMatch(/^<q-item-main.*/);
>>>>>>> bb9e69d53c8c780a44cf829fdfadcf894e67d9aa
        });
    });
});
