export class StackWithArrayFunctionsPushPop<T> {
  // Use a private array to store the data internally
  private items: T[] = [];

  /**
   * Adds an element to the top of the stack.
   */
  push(element: T): void {
    this.items.push(element);
  }

  /**
   * Removes and returns the top element of the stack.
   * Returns undefined if the stack is empty.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the top element without removing it.
   * Returns undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack has no elements.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the total number of elements in the stack.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Removes all elements from the stack.
   */
  clear(): void {
    this.items = [];
  }
}