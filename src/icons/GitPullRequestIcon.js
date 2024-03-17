const GitPullRequestIcon = {
    name: 'GitPullRequestIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('circle', {cx: "18", cy: "18", r: "3"}),
                    render('circle', {cx: "6", cy: "6", r: "3"}),
                    render('path', {d: "M13 6h3a2 2 0 0 1 2 2v7"}),
                    render('line', {x1: "6", y1: "9", x2: "6", y2: "21"})
                ]
            )
        }
    }
}

export default GitPullRequestIcon
