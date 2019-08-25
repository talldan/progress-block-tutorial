# Block Edit Tutorial

## 1. Add the label RichText component

```jsx
<RichText
	className="wp-block-dan-progress__label"
	tagName="p"
	value={ label }
	aria-label={ __( 'Enter Progress Indicator Label' ) }
	placeholder={ __( 'Write label... ' ) }
	onChange={ ( updatedLabel ) => setAttributes( { label: updatedLabel } ) }
/>
```

## 2. Add the progress element

```jsx
<progress
	className="wp-block-dan-progress__progress"
	aria-label={ label }
	value={ value }
	max={ 100 }
>
	{ value }%
</progress>
```

## 3. Make the progress bar editable

```jsx
const { RangeControl } = wp.components;

// ...

{ isSelected && (
	<RangeControl
		aria-label={ __( 'Set Progress Indicator Percentage' ) }
		value={ parseInt( value, 10 ) }
		max={ 100 }
		onChange={ ( updatedValue ) => setAttributes( { value: updatedValue } ) }
	/>
) }
```

## 4. Add the description RichText component

```jsx
<RichText
	className="wp-block-dan-progress__description"
	tagName="p"
	value={ description }
	aria-label={ __( 'Enter Progress Indicator Description' ) }
	placeholder={ __( 'Write description...' ) }
	onChange={ ( updatedDescription ) => setAttributes( { description: updatedDescription } ) }
/>
```
