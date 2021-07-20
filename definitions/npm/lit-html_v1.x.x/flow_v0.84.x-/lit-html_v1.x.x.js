declare module 'lit-html' {
  import type {
    SVGTemplateResult,
    TemplateResult,
  } from 'lit-html/lib/template-result';
  declare export {
    DefaultTemplateProcessor,
    defaultTemplateProcessor,
  } from 'lit-html/lib/default-template-processor';
  declare export {
    directive,
    DirectiveFn,
    isDirective,
  } from 'lit-html/lib/directive';
  declare export { removeNodes, reparentNodes } from 'lit-html/lib/dom';
  declare export { noChange, nothing, Part } from 'lit-html/lib/part';
  declare export {
    AttributeCommitter,
    AttributePart,
    BooleanAttributePart,
    EventPart,
    isIterable,
    isPrimitive,
    NodePart,
    PropertyCommitter,
    PropertyPart,
  } from 'lit-html/lib/parts';
  declare export { RenderOptions } from 'lit-html/lib/render-options';
  declare export { parts, render } from 'lit-html/lib/render';
  declare export {
    templateCaches,
    templateFactory,
  } from 'lit-html/lib/template-factory';
  declare export { TemplateInstance } from 'lit-html/lib/template-instance';
  declare export { TemplateProcessor } from 'lit-html/lib/template-processor';
  declare export {
    SVGTemplateResult,
    TemplateResult,
  } from 'lit-html/lib/template-result';
  declare export {
    createMarker,
    isTemplatePartActive,
    Template,
  } from 'lit-html/lib/template';

  declare var litHtmlVersions: string[];

  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */
  declare export var html: (
    strings: Array<string>,
    ...values: mixed[]
  ) => TemplateResult;
  /**
   * Interprets a template literal as an SVG template that can efficiently
   * render to and update a container.
   */
  declare export var svg: (
    strings: Array<string>,
    ...values: mixed[]
  ) => SVGTemplateResult;
}

declare module 'lit-html/directives/async-append' {
  import type { Part } from 'lit-html';

  /**
   * A directive that renders the items of an async iterable[1], appending new
   * values after previous values, similar to the built-in support for iterables.
   *
   * Async iterables are objects with a [Symbol.asyncIterator] method, which
   * returns an iterator who's `next()` method returns a Promise. When a new
   * value is available, the Promise resolves and the value is appended to the
   * Part controlled by the directive. If another value other than this
   * directive has been set on the Part, the iterable will no longer be listened
   * to and new values won't be written to the Part.
   *
   * [1]: https://github.com/tc39/proposal-async-iteration
   * @param value An async iterable
   * @param mapper An optional function that maps from (value, index) to another
   * value. Useful for generating templates for each item in the iterable.
   */
  declare export var asyncAppend: (
    value: AsyncIterable<mixed>,
    mapper?: ((v: mixed, index?: number | void) => mixed) | void
  ) => (part: Part) => Promise<void>;
}

declare module 'lit-html/directives/async-replace' {
  import type { Part } from 'lit-html';

  /**
   * A directive that renders the items of an async iterable[1], replacing
   * previous values with new values, so that only one value is ever rendered
   * at a time.
   *
   * Async iterables are objects with a [Symbol.asyncIterator] method, which
   * returns an iterator who's `next()` method returns a Promise. When a new
   * value is available, the Promise resolves and the value is rendered to the
   * Part controlled by the directive. If another value other than this
   * directive has been set on the Part, the iterable will no longer be listened
   * to and new values won't be written to the Part.
   *
   * [1]: https://github.com/tc39/proposal-async-iteration
   * @param value An async iterable
   * @param mapper An optional function that maps from (value, index) to another
   * value. Useful for generating templates for each item in the iterable.
   */
  declare export var asyncReplace: (
    value: AsyncIterable<mixed>,
    mapper?: ((v: mixed, index?: number | void) => mixed) | void
  ) => (part: Part) => Promise<void>;
}

declare module 'lit-html/directives/cache' {
  import type { Part } from 'lit-html';

  /**
   * Enables fast switching between multiple templates by caching the DOM nodes
   * and TemplateInstances produced by the templates.
   *
   * Example:
   *
   * ```
   *  * let checked = false;
   *  *
   *  * html`
   *    ${cache(checked ? html`input is checked` : html`input is not checked`)}
   * `
   *  * ```
   */
  declare export var cache: (value: mixed) => (part: Part) => void;
}

declare module 'lit-html/directives/class-map' {
  import type { Part } from 'lit-html';
  declare export type ClassInfo = {
    [name: string]: string | boolean | number,
    ...,
  };
  /**
   * A directive that applies CSS classes. This must be used in the `class`
   * attribute and must be the only part used in the attribute. It takes each
   * property in the `classInfo` argument and adds the property name to the
   * element's `classList` if the property value is truthy; if the property value
   * is falsey, the property name is removed from the element's `classList`. For
   * example
   * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
   * @param {ClassInfo} classInfo
   */
  declare export var classMap: (classInfo: ClassInfo) => (part: Part) => void;
}

declare module 'lit-html/directives/guard' {
  import type { Part } from 'lit-html';

  /**
   * Prevents re-render of a template function until a single value or an array of
   * values changes.
   *
   * Example:
   *
   * ```js
   *  * html`
   *    <div>
   *      ${guard([user.id, company.id], () => html`...`)}
   *    </div>
   * ```
   *  *
   *  * In this case, the template only renders if either `user.id` or `company.id`
   *  * changes.
   *  *
   *  * guard() is useful with immutable data patterns, by preventing expensive work
   *  * until data updates.
   *  *
   *  * Example:
   *  *
   *  * ```js
   * html`
   *  *   <div>
   *  *     ${guard([immutableItems], () => immutableItems.map(i => html`${i}`))}
   *  *   </div>
   *  * ```
   *
   * In this case, items are mapped over only when the array reference changes.
   * @param value the value to check before re-rendering
   * @param f the template function
   */
  declare export var guard: (
    value: mixed,
    f: () => mixed
  ) => (part: Part) => void;
}

declare module 'lit-html/directives/if-defined' {
  import type { Part } from 'lit-html';

  /**
   * For AttributeParts, sets the attribute if the value is defined and removes
   * the attribute if the value is undefined.
   *
   * For other part types, this directive is a no-op.
   */
  declare export var ifDefined: (value: mixed) => (part: Part) => void;
}

declare module 'lit-html/directives/repeat' {
  import type { DirectiveFn } from 'lit-html/lib/directive';
  declare export type KeyFn<T> = (item: T, index: number) => mixed;
  declare export type ItemTemplate<T> = (item: T, index: number) => mixed;
  /**
   * A directive that repeats a series of values (usually `TemplateResults`)
   * generated from an iterable, and updates those items efficiently when the
   * iterable changes based on user-provided `keys` associated with each item.
   *
   * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
   * meaning previous DOM for a given key is moved into the new position if
   * needed, and DOM will never be reused with values for different keys (new DOM
   * will always be created for new keys). This is generally the most efficient
   * way to use `repeat` since it performs minimum unnecessary work for insertions
   * amd removals.
   *
   * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
   * given call to `repeat`. The behavior when two or more items have the same key
   * is undefined.
   *
   * If no `keyFn` is provided, this directive will perform similar to mapping
   * items to values, and DOM will be reused against potentially different items.
   */
  declare export var repeat: <T>(
    items: Iterable<T>,
    keyFnOrTemplate: KeyFn<T> | ItemTemplate<T>,
    template?: ItemTemplate<T> | void
  ) => DirectiveFn;
}

declare module 'lit-html/directives/style-map' {
  import type { Part } from 'lit-html';
  declare export interface StyleInfo {
    [name: string]: string;
  }
  /**
   * A directive that applies CSS properties to an element.
   *
   * `styleMap` can only be used in the `style` attribute and must be the only
   * expression in the attribute. It takes the property names in the `styleInfo`
   * object and adds the property values as CSS propertes. Property names with
   * dashes (`-`) are assumed to be valid CSS property names and set on the
   * element's style object using `setProperty()`. Names without dashes are
   * assumed to be camelCased JavaScript property names and set on the element's
   * style object using property assignment, allowing the style object to
   * translate JavaScript-style names to CSS property names.
   *
   * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
   *  * '0'})` sets the `background-color`, `border-top` and `--size` properties.
   * @param {StyleInfo} styleInfo
   */
  declare export var styleMap: (styleInfo: StyleInfo) => (part: Part) => void;
}

declare module 'lit-html/directives/unsafe-html' {
  import type { Part } from 'lit-html';

  /**
   * Renders the result as HTML, rather than text.
   *
   * Note, this is unsafe to use with any user-provided input that hasn't been
   * sanitized or escaped, as it may lead to cross-site-scripting
   * vulnerabilities.
   */
  declare export var unsafeHTML: (value: mixed) => (part: Part) => void;
}

declare module 'lit-html/directives/until' {
  import type { Part } from 'lit-html';

  /**
   * Renders one of a series of values, including Promises, to a Part.
   *
   * Values are rendered in priority order, with the first argument having the
   * highest priority and the last argument having the lowest priority. If a
   * value is a Promise, low-priority values will be rendered until it resolves.
   *
   * The priority of values can be used to create placeholder content for async
   * data. For example, a Promise with pending content can be the first,
   * highest-priority, argument, and a non_promise loading indicator template can
   * be used as the second, lower-priority, argument. The loading indicator will
   * render immediately, and the primary content will render when the Promise
   * resolves.
   *
   * Example:
   *
   *      const content = fetch('./content.txt').then(r => r.text());
   *      html`${until(content, html`<span>Loading...</span>`)}`
   */
  declare export var until: (...args: mixed[]) => (part: Part) => void;
}

declare module 'lit-html/lib/default-template-processor' {
  import type { Part } from 'lit-html/lib/part';
  import type { NodePart } from 'lit-html/lib/parts';
  import type { RenderOptions } from 'lit-html/lib/render-options';
  import type { TemplateProcessor } from 'lit-html/lib/template-processor';

  /**
   * Creates Parts when a template is instantiated.
   */
  declare export class DefaultTemplateProcessor implements TemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     * @param element The element containing the binding
     * @param name The attribute name
     * @param strings The string literals. There are always at least two strings,
     * event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(
      element: Element,
      name: string,
      strings: $ReadOnlyArray<string>,
      options: RenderOptions
    ): $ReadOnlyArray<Part>;

    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options: RenderOptions): NodePart;
  }
  declare export var defaultTemplateProcessor: DefaultTemplateProcessor;
}

declare module 'lit-html/lib/directive' {
  import type { Part } from 'lit-html/lib/part';
  declare export type DirectiveFactory = (
    ...args: any[]
  ) => { [key: string]: any };
  declare export type DirectiveFn = (part: Part) => void;
  /**
   * Brands a function as a directive factory function so that lit-html will call
   * the function during template rendering, rather than passing as a value.
   *
   * A _directive_ is a function that takes a Part as an argument. It has the
   * signature: `(part: Part) => void`.
   *
   * A directive _factory_ is a function that takes arguments for data and
   * configuration and returns a directive. Users of directive usually refer to
   * the directive factory as the directive. For example, "The repeat directive".
   *
   * Usually a template author will invoke a directive factory in their template
   * with relevant arguments, which will then return a directive function.
   *
   * Here's an example of using the `repeat()` directive factory that takes an
   * array and a function to render an item:
   *
   * ```js
   *  * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
   *  * ```
   *
   * When `repeat` is invoked, it returns a directive function that closes over
   * `items` and the template function. When the outer template is rendered, the
   * return directive function is called with the Part for the expression.
   * `repeat` then performs it's custom logic to render multiple items.
   * @param f The directive factory function. Must be a function that returns a
   * function of the signature `(part: Part) => void`. The returned function will
   * be called with the part object.
   * @example import {directive, html} from 'lit-html';
   *
   * const immutable = directive((v) => (part) => {
   * if (part.value !== v) {
   * part.setValue(v)
   * }
   * });
   */
  declare export var directive: <F: DirectiveFactory>(f: F) => F;
  declare export var isDirective: (o: mixed) => boolean;
}

declare module 'lit-html/lib/dom' {
  /**
   * True if the custom elements polyfill is in use.
   */
  declare export var isCEPolyfill: boolean;
  /**
   * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
   * into another container (could be the same container), before `before`. If
   * `before` is null, it appends the nodes to the container.
   */
  declare export var reparentNodes: (
    container: Node,
    start: Node | null,
    end?: Node | null,
    before?: Node | null
  ) => void;
  /**
   * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
   * `container`.
   */
  declare export var removeNodes: (
    container: Node,
    start: Node | null,
    end?: Node | null
  ) => void;
}

declare module 'lit-html/lib/modify-template' {
  import type { Template } from 'lit-html/lib/template';

  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *    div#1 (remove) <-- start removing (removing node is div#1)
   *      div
   *        div#2 (remove)  <-- continue removing (removing node is still div#1)
   *          div
   * div <-- stop removing since previous sibling is the removing node (div#1,
   * removed 4 nodes)
   */
  declare export function removeNodesFromTemplate(
    template: Template,
    nodesToRemove: Set<Node>
  ): void;

  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */
  declare export function insertNodeIntoTemplate(
    template: Template,
    node: Node,
    refNode?: Node | null
  ): void;
}

declare module 'lit-html/lib/part' {
  /**
   * The Part interface represents a dynamic part of a template instance rendered
   * by lit-html.
   */
  declare export interface Part {
    +value: mixed;

    /**
     * Sets the current part value, but does not write it to the DOM.
     * @param value The value that will be committed.
     */
    setValue(value: mixed): void;

    /**
     * Commits the current part value, causing it to actually be written to the
     * DOM.
     *
     * Directives are run at the start of `commit`, so that if they call
     * `part.setValue(...)` synchronously that value will be used in the current
     * commit, and there's no need to call `part.commit()` within the directive.
     * If directives set a part value asynchronously, then they must call
     * `part.commit()` manually.
     */
    commit(): void;
  }
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  declare export var noChange: {};
  /**
   * A sentinel value that signals a NodePart to fully clear its content.
   */
  declare export var nothing: {};
}

declare module 'lit-html/lib/parts' {
  import type { Part } from 'lit-html/lib/part';
  import type { RenderOptions } from 'lit-html/lib/render-options';

  declare export type Primitive =
    | null
    | void
    | boolean
    | number
    | string
    | Symbol
    | number;
  declare export var isPrimitive: (value: mixed) => boolean;
  declare export var isIterable: (value: mixed) => boolean;
  /**
   * Writes attribute values to the DOM for a group of AttributeParts bound to a
   * single attibute. The value is only set once even if there are multiple parts
   * for an attribute.
   */
  declare export class AttributeCommitter {
    +element: Element;
    +name: string;
    +strings: $ReadOnlyArray<string>;
    +parts: $ReadOnlyArray<AttributePart>;
    dirty: boolean;
    constructor(
      element: Element,
      name: string,
      strings: $ReadOnlyArray<string>
    ): this;

    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart(): AttributePart;
    _getValue(): mixed;
    commit(): void;
  }
  /**
   * A Part that controls all or part of an attribute value.
   */
  declare export class AttributePart implements Part {
    +committer: AttributeCommitter;
    value: mixed;
    constructor(committer: AttributeCommitter): this;
    setValue(value: mixed): void;
    commit(): void;
  }
  /**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */
  declare export class NodePart implements Part {
    +options: RenderOptions;
    startNode: Node;
    endNode: Node;
    value: mixed;
    constructor(options: RenderOptions): this;

    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container: Node): void;

    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref: Node): void;

    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part: NodePart): void;

    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref: NodePart): void;
    setValue(value: mixed): void;
    commit(): void;
    clear(startNode?: Node): void;
  }
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */
  declare export class BooleanAttributePart implements Part {
    +element: Element;
    +name: string;
    +strings: $ReadOnlyArray<string>;
    value: mixed;
    constructor(
      element: Element,
      name: string,
      strings: $ReadOnlyArray<string>
    ): this;
    setValue(value: mixed): void;
    commit(): void;
  }
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */
  declare export class PropertyCommitter mixins AttributeCommitter {
    +single: boolean;
    constructor(
      element: Element,
      name: string,
      strings: $ReadOnlyArray<string>
    ): this;
    _createPart(): PropertyPart;
    _getValue(): mixed;
    commit(): void;
  }
  declare export class PropertyPart mixins AttributePart {}

  declare type EventHandlerWithOptions =
    // EventListenerOrEventListenerObject &
    // $Rest<AddEventListenerOptions, {}>
    // TODO
    any;

  declare export class EventPart implements Part {
    +element: Element;
    +eventName: string;
    +eventContext?: EventTarget;
    value: void | EventHandlerWithOptions;
    constructor(
      element: Element,
      eventName: string,
      eventContext?: EventTarget
    ): this;
    setValue(value: void | EventHandlerWithOptions): void;
    commit(): void;
    handleEvent(event: Event): void;
  }
}

declare module 'lit-html/lib/render-options' {
  import type { TemplateFactory } from 'lit-html/lib/template-factory';

  declare export interface RenderOptions {
    +templateFactory: TemplateFactory;
    +eventContext?: EventTarget;
  }
}

declare module 'lit-html/lib/render' {
  import type { NodePart } from 'lit-html/lib/parts';
  import type { RenderOptions } from 'lit-html/lib/render-options';

  declare export var parts: WeakMap<Node, NodePart>;
  /**
   * Renders a template result or other value to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   * @param result Any value renderable by NodePart - typically a TemplateResult
   * created by evaluating a template tag like `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   * replaced, or efficiently updated if the same result type was previous
   * rendered there.
   * @param options RenderOptions for the entire render tree rendered to this
   * container. Render options must *not* change between renders to the same
   * container, as those changes will not effect previously rendered DOM.
   */
  declare export var render: (
    result: mixed,
    container: Element | DocumentFragment,
    options?: $Rest<RenderOptions, {}> | void
  ) => void;
}

declare module 'lit-html/lib/shady-render' {
  declare module.exports: any;
}

declare module 'lit-html/lib/template-factory' {
  import type { TemplateResult } from 'lit-html/lib/template-result';
  import type { Template } from 'lit-html/lib/template';

  /**
   * A function type that creates a Template from a TemplateResult.
   *
   * This is a hook into the template-creation process for rendering that
   * requires some modification of templates before they're used, like ShadyCSS,
   * which must add classes to elements and remove styles.
   *
   * Templates should be cached as aggressively as possible, so that many
   * TemplateResults produced from the same expression only do the work of
   * creating the Template the first time.
   *
   * Templates are usually cached by TemplateResult.strings and
   * TemplateResult.type, but may be cached by other keys if this function
   * modifies the template.
   *
   * Note that currently TemplateFactories must not add, remove, or reorder
   * expressions, because there is no way to describe such a modification
   * to render() so that values are interpolated to the correct place in the
   * template instances.
   */
  declare export type TemplateFactory = (result: TemplateResult) => Template;
  /**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */
  declare export function templateFactory(result: TemplateResult): Template;

  /**
   * The first argument to JS template tags retain identity across multiple
   * calls to a tag for the same literal, so we can cache work done per literal
   * in a Map.
   *
   * Safari currently has a bug which occasionally breaks this behaviour, so we
   * need to cache the Template at two levels. We first cache the
   * TemplateStringsArray, and if that fails, we cache a key constructed by
   * joining the strings array.
   */
  declare export type templateCache = {
    +stringsArray: WeakMap<Array<string>, Template>,
    +keyString: Map<string, Template>,
  };
  declare export var templateCaches: Map<string, templateCache>;
}

declare module 'lit-html/lib/template-instance' {
  import type { RenderOptions } from 'lit-html/lib/render-options';
  import type { TemplateProcessor } from 'lit-html/lib/template-processor';
  import type { Template } from 'lit-html/lib/template';

  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */
  declare export class TemplateInstance {
    +processor: TemplateProcessor;
    +options: RenderOptions;
    +template: Template;
    constructor(
      template: Template,
      processor: TemplateProcessor,
      options: RenderOptions
    ): this;
    update(values: $ReadOnlyArray<mixed>): void;
    _clone(): DocumentFragment;
  }
}

declare module 'lit-html/lib/template-processor' {
  import type { Part } from 'lit-html/lib/part';
  import type { NodePart } from 'lit-html/lib/parts';
  import type { RenderOptions } from 'lit-html/lib/render-options';

  declare export interface TemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     * @param element The element containing the binding
     * @param name The attribute name
     * @param strings The string literals. There are always at least two strings,
     * event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(
      element: Element,
      name: string,
      strings: $ReadOnlyArray<string>,
      options: RenderOptions
    ): $ReadOnlyArray<Part>;

    /**
     * Create parts for a text-position binding.
     * @param partOptions
     */
    handleTextExpression(options: RenderOptions): NodePart;
  }
}

declare module 'lit-html/lib/template-result' {
  import type { TemplateProcessor } from 'lit-html/lib/template-processor';

  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */
  declare export class TemplateResult {
    +strings: Array<string>;
    +values: $ReadOnlyArray<mixed>;
    +type: string;
    +processor: TemplateProcessor;
    constructor(
      strings: Array<string>,
      values: $ReadOnlyArray<mixed>,
      type: string,
      processor: TemplateProcessor
    ): this;

    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML(): string;
    getTemplateElement(): HTMLTemplateElement;
  }

  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */
  declare export class SVGTemplateResult mixins TemplateResult {
    getHTML(): string;
    getTemplateElement(): HTMLTemplateElement;
  }
}

declare module 'lit-html/lib/template' {
  import type { TemplateResult } from 'lit-html/lib/template-result';

  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  declare export var marker: string;
  /**
   * An expression marker used text-positions, multi-binding attributes, and
   * attributes with markup-like text values.
   */
  declare export var nodeMarker: string;
  declare export var markerRegex: RegExp;
  /**
   * Suffix appended to all bound attribute names.
   */
  declare export var boundAttributeSuffix: any; // "$lit$"
  /**
   * An updateable Template that tracks the location of dynamic parts.
   */
  declare export class Template {
    +parts: TemplatePart[];
    +element: HTMLTemplateElement;
    constructor(result: TemplateResult, element: HTMLTemplateElement): this;
  }
  /**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */
  declare export type TemplatePart =
    | {
        +type: 'node',
        index: number,
      }
    | {
        +type: 'attribute',
        index: number,
        +name: string,
        +strings: $ReadOnlyArray<string>,
      };
  declare export var isTemplatePartActive: (part: TemplatePart) => boolean;
  declare export var createMarker: () => Comment;
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#elements-attributes
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-characters
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
   * space character except " ".
   *
   * So an attribute is:
   *   * The name: any character except a control character, space character, ('),
   *     ("), ">", "=", or "/"
   *   * Followed by zero or more space characters
   *   * Followed by "="
   *   * Followed by zero or more space characters
   *   * Followed by:
   *     * Any character except space, ('), ("), "<", ">", "=", (`), or
   *  *    * (") then any non-("), or
   *  *    * (') then any non-(')
   *  *
   */
  declare export var lastAttributeNameRegex: RegExp;
}

declare module 'lit-html/lib/html' {
  import type { TemplatePart } from 'lit-html/lib/template';
  declare export class HTMLTemplate {
    element: HTMLTemplateElement;
    parts: TemplatePart[];
    constructor(element: HTMLTemplateElement): this;
  }
}

declare module 'lit-html/polyfills/template_polyfill' {
  declare export var initTemplatePolyfill: (forced?: boolean) => void;
}

// Filename aliases
declare module 'lit-html/lit-html' {
  declare module.exports: $Exports<'lit-html'>;
}
declare module 'lit-html/directives/async-append.js' {
  declare module.exports: $Exports<'lit-html/directives/async-append'>;
}
declare module 'lit-html/directives/async-replace.js' {
  declare module.exports: $Exports<'lit-html/directives/async-replace'>;
}
declare module 'lit-html/directives/cache.js' {
  declare module.exports: $Exports<'lit-html/directives/cache'>;
}
declare module 'lit-html/directives/class-map.js' {
  declare module.exports: $Exports<'lit-html/directives/class-map'>;
}
declare module 'lit-html/directives/guard.js' {
  declare module.exports: $Exports<'lit-html/directives/guard'>;
}
declare module 'lit-html/directives/if-defined.js' {
  declare module.exports: $Exports<'lit-html/directives/if-defined'>;
}
declare module 'lit-html/directives/repeat.js' {
  declare module.exports: $Exports<'lit-html/directives/repeat'>;
}
declare module 'lit-html/directives/style-map.js' {
  declare module.exports: $Exports<'lit-html/directives/style-map'>;
}
declare module 'lit-html/directives/unsafe-html.js' {
  declare module.exports: $Exports<'lit-html/directives/unsafe-html'>;
}
declare module 'lit-html/directives/until.js' {
  declare module.exports: $Exports<'lit-html/directives/until'>;
}
declare module 'lit-html/lib/default-template-processor.js' {
  declare module.exports: $Exports<'lit-html/lib/default-template-processor'>;
}
declare module 'lit-html/lib/directive.js' {
  declare module.exports: $Exports<'lit-html/lib/directive'>;
}
declare module 'lit-html/lib/dom.js' {
  declare module.exports: $Exports<'lit-html/lib/dom'>;
}
declare module 'lit-html/lib/html.js' {
  declare module.exports: $Exports<'lit-html/lib/html'>;
}
declare module 'lit-html/lib/modify-template.js' {
  declare module.exports: $Exports<'lit-html/lib/modify-template'>;
}
declare module 'lit-html/lib/part.js' {
  declare module.exports: $Exports<'lit-html/lib/part'>;
}
declare module 'lit-html/lib/parts.js' {
  declare module.exports: $Exports<'lit-html/lib/parts'>;
}
declare module 'lit-html/lib/render-options.js' {
  declare module.exports: $Exports<'lit-html/lib/render-options'>;
}
declare module 'lit-html/lib/render.js' {
  declare module.exports: $Exports<'lit-html/lib/render'>;
}
declare module 'lit-html/lib/shady-render.js' {
  declare module.exports: $Exports<'lit-html/lib/shady-render'>;
}
declare module 'lit-html/lib/template-factory.js' {
  declare module.exports: $Exports<'lit-html/lib/template-factory'>;
}
declare module 'lit-html/lib/template-instance.js' {
  declare module.exports: $Exports<'lit-html/lib/template-instance'>;
}
declare module 'lit-html/lib/template-processor.js' {
  declare module.exports: $Exports<'lit-html/lib/template-processor'>;
}
declare module 'lit-html/lib/template-result.js' {
  declare module.exports: $Exports<'lit-html/lib/template-result'>;
}
declare module 'lit-html/lib/template.js' {
  declare module.exports: $Exports<'lit-html/lib/template'>;
}
declare module 'lit-html/lit-html.js' {
  declare module.exports: $Exports<'lit-html/lit-html'>;
}
declare module 'lit-html/polyfills/template_polyfill.js' {
  declare module.exports: $Exports<'lit-html/polyfills/template_polyfill'>;
}
