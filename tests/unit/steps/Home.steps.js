import Vue from 'vue';
import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import Default from "src/layouts/Default.vue";
import Home from "src/views/Home.vue";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

Vue.config.silent = true;

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

    test("Verify the application and its basic elements", ({ given, when, then }) => {
        let wrapper;

        // Load our Default layout into the Vue rendering engine along with the Router instance
        given("The page is open in a browser", () => {
            wrapper = mount(Default, {
                localVue,
            });
        });

        when("I inspect the page", () => {
            // No-Operation
        });

        then("I should see the Application name", () => {
            //console.log(wrapper.html());
            expect(wrapper.html()).toContain('My ToDo Application');
        });

        then("sidebar menu should have a link to Home page", () => {
            const it = wrapper.findAll("div.q-item-label").at(0);
            //console.log(it.html());
            expect(it).toBeDefined();
            expect(it.html()).toContain("Home");
        });

        then("sidebar menu should have a link to About page", () => {
            const it = wrapper.findAll("div.q-item-label").at(1);
            //console.log(it.html());
            expect(it).toBeDefined();
            expect(it.html()).toContain("About");
        });
    });

    // test("List on the home page", ({ given, when, then }) => {
    //     let wrapper;

    //     given("The page is open in a browser", () => {
    //         wrapper = mount(Home, { localVue });
    //     });

    //     // There really is not operation here, but we need a `when` clause
    //     when("I inspect the page elements", () => {
    //         // No-Operation
    //     });

    //     then("I should see my list", () => {
    //         const it = wrapper.find("div.q-list-header");
    //         console.log(it.html());
    //         // expect(it.html()).toMatch(/^My ToDo List*/);
    //         // expect(wrapper.html()).toContain('My ToDo List');
    //     });

    //     then("the page should contain a UL tag", () => {
    //         expect(wrapper.find("div.q-item-label ellipsis")).toBeDefined();
    //         expect(wrapper.html()).toMatch("Brunch this weekend");
    //     });

    //     then("the page should have at least 3 li items", () => {
    //       //  expect(wrapper.html()).toMatch(/^<q-item-main.*/);
    //     });
    // });
});