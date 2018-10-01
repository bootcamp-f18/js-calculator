# Issues

1. If the user presses 1 + 2 = = =, we end up with
    value1 = 0,
    operator = null,
    value2 = null,
    lastButton = =
    and this generates the "No function selected" alert.

    What should happen?


2. If the user presses 1 = 3, the display showed 13.

    What should happen?

    Pressing another number after = should reset the display
    as if a calculation had already been performed. In this
    case, the display should have been updated to show 3.
