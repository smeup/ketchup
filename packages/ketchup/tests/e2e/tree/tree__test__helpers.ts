import {E2EElement} from "@stencil/core/testing";

export async function testTreeNodeValue(treeNode: E2EElement, value: string) {
  const content = await treeNode.find('td:nth-of-type(1) > .cell-content');
  return expect(content).toEqualText(value);
}
