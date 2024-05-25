import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Ripple } from "@/directives/ripple";
import { Helpers } from '@/utils/helpers';
import { Icon } from "@iconify/vue";
import { useColor, makeColorProp } from "@/composable/color";
import { useSize, makeSizeProp } from "@/composable/size";
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ComponentInternalInstance, ref } from 'vue';

enum NAMESPACES {
	CHIP = 'vz-chip',
	CHIP_ICON = 'vz-chip__icon',
	CHIP_CLOSE = 'vz-chip__close',
	CHIP_CONTENT = 'vz-chip__content',
	CHIP_DISABLED = 'vz-chip--disabled',
	CHIP_CLICKABLE = 'vz-chip--clickable',
};

const vChipProps = makePropsFactory({
	modelValue: {
		type: Boolean,
		default: true
	},
	content: {
		type: String,
		default: undefined
	},
	icon: {
		type: String,
		default: undefined
	},
	closable: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	...makeColorProp(),
	...makeSizeProp(),
});

const Chip = defineComponent({
	name: 'Chip',
	props: vChipProps,
	inheritsAttrs: true,
	emits: {
		click(payload: {
			originalEvent: Event,
			currentInstance: ComponentInternalInstance
		}) {
			return payload.originalEvent && payload.currentInstance;
		},
		'remove': null,
		'update:modelValue': (payload: Boolean) => {
			return !payload;
		},
		'click:close': (payload: {
			originalEvent: Event,
			currentInstance: ComponentInternalInstance
		}) => {
			return payload.originalEvent && payload.currentInstance;
		}
	},
	directives: {
		'ripple': Ripple
	},
	setup(props, { slots, emit, attrs }) {
		const instance = getCurrentInstance();
		const componentID = generateComponentId(NAMESPACES.CHIP);

		const visible = ref<boolean>(true);
		
		const color = useColor(NAMESPACES.CHIP, props.color as string);
		const size = useSize(NAMESPACES.CHIP, props.size as string);
		
		const hasIcon = computed(() => !!(slots.icon || props.icon));
		const isClickable = computed(() => {
			return !props.disabled && instance?.vnode.props?.onClick
		});
		const hasContent = computed(() => !!(slots.default || props.content));

		const componentAttrs = computed(() => {
			return {
				...attrs,
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.CHIP, '-'),
			};
		});

		function onClick(e: Event) {
			emit('click', {
				originalEvent: e,
				currentInstance: instance,
			});
		}

		function onClose(e: Event) {
			e.stopPropagation();
			e.preventDefault();

			emit('update:modelValue', false);
			emit('remove');
		}
		
		return {
			size,
			color,
			visible,
			hasIcon,
			hasContent,
			isClickable,
			onClick,
			onClose,
			componentAttrs,
		};
	},
	render() {
		return (
			<>
				{this.modelValue && (
					<div class={[
							this.color,
							this.size,
							NAMESPACES.CHIP,
							this.disabled ? NAMESPACES.CHIP_DISABLED : '',
							this.isClickable ? NAMESPACES.CHIP_CLICKABLE : '',
						]}
						// v-ripple
						{...this.componentAttrs}
						onClick={ this.isClickable && this.onClick }
					>	
						{this.hasIcon && (
							<i class={NAMESPACES.CHIP_ICON}>
								<Icon icon={this.icon}/>
							</i>
						)}

						<span class={NAMESPACES.CHIP_CONTENT}>
							{this.hasContent && (this.$slots.default?.() || this.content)}
						</span>
						
						{this.closable && (
							<i class={NAMESPACES.CHIP_CLOSE} 
								onClick={!this.disabled && this.onClose}
							>
								<Icon icon="mdi:close-circle"/>
							</i>
						)}
					</div>
				)}

				



			</>
		);
	}
});

type ChipType = InstanceType<typeof Chip>;

export {
	Chip,
	ChipType,
};


