const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Book titles should be sorted in descending order.", () => {
    expect(
      sorting.sortByName([
       "Волшебник изумрудного города",
       "Властелин Колец",
       "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Book titles should without sorting.", () => {
    expect(
      sorting.sortByName([
       "Волшебник изумрудного города",
       "Волшебник изумрудного города",
       "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ]);
  });
});
