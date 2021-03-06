const stdlib_debug_assert_functionsHTML = `
<div class="code">@inline
pub assert(expr bool)</div>
Writes default fail message to <x class="inline_code">cerr</x> and exit failure if assertion failed.

<div class="code">@inline
pub assert_message(expr bool, msg str)</div>
Writes fail message to <x class="inline_code">cerr</x> and exit failure if assertion failed.

<div class="topic-separator"></div>
<div class="code">@inline
pub assert_panic(expr bool, error Error)</div>
Panics with given error if assertion failed.
`;

const NAV_stdlib_debug_assert_functions = document.getElementById("functions");

const stdlib_debug_assert_nav = new SideNavigator();
stdlib_debug_assert_nav.navigations = [
    [NAV_stdlib_debug_assert_functions, stdlib_debug_assert_functionsHTML],
];

stdlib_debug_assert_nav.set_events();
stdlib_debug_assert_nav.set_content_url();
