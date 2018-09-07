<template>
	<v-container>
		<h1 class="display-1 mb-2 text-xs-center">Register</h1>

		<v-stepper v-model="e1">
			<v-stepper-header>
				<v-stepper-step :complete="e1 > 1" step="1">Informasi Umum</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step :complete="e1 > 2" step="2">Kontak</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step :complete="e1 > 3" step="3">Password</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step step="4">Selesai</v-stepper-step>
			</v-stepper-header>

			<v-stepper-items>
				<v-stepper-content step="1">
					<v-container grid-list-md class="pa-0">
						<v-layout row wrap>
							<v-flex xs12>
								<v-text-field
									outline
									label="Nama Depan"
									v-model="userE1.firstName"
									:error-messages="firstNameErrors"
									@blur="$v.userE1.firstName.$touch()"
									@input="$v.userE1.firstName.$touch()"
								></v-text-field>
							</v-flex>

							<v-flex xs12>
								<v-text-field
									outline
									label="Nama Belakang"
									v-model="userE1.lastName"
									:error-messages="lastNameErrors"
									@blur="$v.userE1.lastName.$touch()"
									@input="$v.userE1.lastName.$touch()"
								></v-text-field>
							</v-flex>

							<v-flex md10>
								<v-select
									outline
									label="Pilih Jenis Kelamin"
									:items="genders"
									item-text="text"
									item-value="value"
									v-model="userE1.gender"
									:error-messages="genderErrors"
									@blur="$v.userE1.gender.$touch()"
								></v-select>
							</v-flex>

							<v-flex md2>
								<v-select
									outline
									label="Umur"
									:items="ages"
									item-text="text"
									item-value="value"
									v-model="userE1.age"
									:error-messages="ageErrors"
									@blur="$v.userE1.age.$touch()"
								></v-select>
							</v-flex>
						</v-layout>
					</v-container>

					<v-btn
						color="primary"
						class="ml-0"
						@click.native="e1 = 2"
						:disabled="!$v.userE1.$dirty || $v.userE1.$error"
					>Next</v-btn>
				</v-stepper-content>

				<v-stepper-content step="2">
					<v-text-field
						outline
						label="Email"
						v-model="userE2.email"
						:error-messages="emailErrors"
						@blur="$v.userE2.email.$touch()"
						@input="$v.userE2.email.$touch()"
					></v-text-field>

					<v-text-field
						outline
						label="Nomor Telepon"
						v-model="userE2.phone"
						:error-messages="phoneErrors"
						@blur="$v.userE2.phone.$touch()"
						@input="$v.userE2.phone.$touch()"
					></v-text-field>

					<v-btn
						color="primary"
						class="ml-0"
						@click.native="e1 = 3"
						:disabled="!$v.userE2.$dirty || $v.userE2.$error"
					>Next</v-btn>
				</v-stepper-content>

				<v-stepper-content step="3">
					<v-text-field
						outline
						type="password"
						label="Kata Sandi"
						v-model="userE3.password"
						:error-messages="passwordErrors"
						@blur="$v.userE3.password.$touch()"
						@input="$v.userE3.password.$touch()"
					></v-text-field>

					<v-text-field
						outline
						type="password"
						label="Ulangi Kata Sandi"
						v-model="userE3.passConf"
						:error-messages="passConfErrors"
						@blur="$v.userE3.passConf.$touch()"
						@input="$v.userE3.passConf.$touch()"
					></v-text-field>

					<v-btn
						color="primary"
						class="ml-0"
						@click.native="e1 = 4"
						:disabled="!$v.userE3.$dirty || $v.userE3.$error"
					>Next</v-btn>
				</v-stepper-content>

				<v-stepper-content step="4">
					<v-card
					>
						<v-card-text class="text-xs-center">
							<p class="display-3 amber--text">
								<i class="fas fa-thumbs-up"></i>
							</p>
							<p class="title orange--text text--darken-4">Selamat!</p>
							<p class="subheading blue--text text--darken-1">
								<strong>Anda berhasil daftar di TK Bermain Terus!</strong>
							</p>
						</v-card-text>
					</v-card>
				</v-stepper-content>
			</v-stepper-items>

		</v-stepper>

	</v-container>
</template>

<script>
import { required, email, numeric, sameAs } from 'vuelidate/lib/validators'

export default {
	data: () => ({
		e1: 1,
		userE1: {
			firstName: '',
			lastName: '',
			gender: '',
			age: ''
		},
		userE2: {
			email: '',
			phone: ''
		},
		userE3: {
			password: '',
			passConf: ''
		},
		genders: [
			{ text: 'Laki - laki', value: 'l' },
			{ text: 'Perempuan', value: 'p' }
		],
		ages: [
			{ text: '1 - 10', value: '1' },
			{ text: '11 - 20', value: '2' },
			{ text: '21 - 30', value: '3' },
			{ text: '31 - 40', value: '4' },
			{ text: '41 - 50', value: '5' },
			{ text: '> 50', value: '6' }
		]
	}),

	validations: {
		userE1: {
			firstName: { required },
			lastName: { required },
			gender: { required },
			age: { required }
		},

		userE2: {
			email: { required, email },
			phone: { required, numeric }
		},

		userE3: {
			password: { required },
			passConf: { required, sameAs: sameAs('password') }
		}
	},

	computed: {
		firstNameErrors () {
			const errors = []
			if (!this.$v.userE1.firstName.$dirty) return errors
			!this.$v.userE1.firstName.required && errors.push('Nama depan dibutuhkan')
			return errors
		},

		lastNameErrors () {
			const errors = []
			if (!this.$v.userE1.lastName.$dirty) return errors
			!this.$v.userE1.lastName.required && errors.push('Nama belakang dibutuhkan')
			return errors
		},

		genderErrors () {
			const errors = []
			if (!this.$v.userE1.gender.$dirty) return errors
			!this.$v.userE1.gender.required && errors.push('Jenis kelamin dibutuhkan')
			return errors
		},

		ageErrors () {
			const errors = []
			if (!this.$v.userE1.age.$dirty) return errors
			!this.$v.userE1.age.required && errors.push('Umur dibutuhkan')
			return errors
		},

		emailErrors () {
			const errors = []
			if (!this.$v.userE2.email.$dirty) return errors
			!this.$v.userE2.email.required && errors.push('Email dibutuhkan')
			!this.$v.userE2.email.email && errors.push('Email tidak sesuai')
			return errors
		},

		phoneErrors () {
			const errors = []
			if (!this.$v.userE2.phone.$dirty) return errors
			!this.$v.userE2.phone.required && errors.push('Nomor telepon dibutuhkan')
			!this.$v.userE2.phone.numeric && errors.push('Nomor telepon harus numerik')
			return errors
		},

		passwordErrors () {
			const errors = []
			if (!this.$v.userE3.password.$dirty) return errors
			!this.$v.userE3.password.required && errors.push('Kata sandi dibutuhkan')
			return errors
		},

		passConfErrors () {
			const errors = []
			if (!this.$v.userE3.passConf.$dirty) return errors
			!this.$v.userE3.passConf.required && errors.push('Ulang kata sandi dibutuhkan')
			!this.$v.userE3.passConf.sameAs && errors.push('Ulang kata sandi tidak sesuai')
			return errors
		}
	}
}
</script>
